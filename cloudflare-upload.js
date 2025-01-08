const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

// Your R2 credentials and account ID
const ACCOUNT_ID = '6104e579d050c86c63502298905c3d72';
const ACCESS_KEY_ID = '021fd4ac2d8d326af094a7266f040f86';
const SECRET_ACCESS_KEY = 'd83315aaa7e4992ea659252265cf73680c8d679f3fcc16b0643f3816b0a3f816';
const BUCKET_NAME = 'video-storage';

// Check if a filename was provided as an argument
const filePath = process.argv[2];
if (!filePath) {
    console.error('Please provide a file path as an argument');
    process.exit(1); // Exit if no file is provided
}

const objectKey = filePath.split('/').pop(); // Extract the file name from the path

// Set up the S3 client for Cloudflare R2 (v3)
const s3Client = new S3Client({
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    region: 'auto', // Cloudflare R2 doesn’t use regions but it's required by the SDK
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY
    }
});

// Function to format seconds into hh:mm:ss
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins > 0 ? `${mins}m ` : ''}${secs}s`;
}

// Function to upload the object
async function uploadObject() {
    const fileData = fs.readFileSync(filePath); // Read the entire file into memory
    const totalSize = fileData.length; // Total size of the file in bytes

    const startTime = Date.now(); // Start time for calculating speed

    const params = {
        Bucket: BUCKET_NAME,
        Key: objectKey,
        Body: fileData // The body of the upload is the file data
    };

    return new Promise(async (resolve, reject) => {
        try {
            const command = new PutObjectCommand(params);

            // Simulate upload progress and ETA
            const interval = setInterval(() => {
                const elapsedTime = (Date.now() - startTime) / 1000; // Elapsed time in seconds
                const uploadedBytes = totalSize; // Simulate as uploaded instantly for non-streaming
                const speedMB = (uploadedBytes / 1024 / 1024 / elapsedTime).toFixed(2); // Speed in MB/s
                const etaSeconds = (totalSize - uploadedBytes) / (uploadedBytes / elapsedTime);

                // Display the speed and ETA
                process.stdout.write(
                    `\rSpeed: ${speedMB} MB/s | ETA: ${formatTime(etaSeconds)}`
                );
            }, 500);

            // Send the upload command
            await s3Client.send(command);

            clearInterval(interval); // Clear the progress display interval
            console.log('\nSuccessfully uploaded the object');
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

// Exponential backoff retry logic
async function uploadObjectWithRetry() {
    const maxRetries = 5; // Set the number of retries
    const initialDelay = 1000; // Initial delay of 1 second
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            attempts += 1;
            console.log(`Attempt ${attempts} of ${maxRetries}`);
            await uploadObject();
            break; // Exit the loop if upload is successful
        } catch (error) {
            console.error('Failed to upload the object:', error);
            if (attempts >= maxRetries) {
                console.log('Max retries reached, aborting...');
                break;
            } else {
                const delay = initialDelay * Math.pow(2, attempts - 1); // Exponential backoff
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
            }
        }
    }
}

uploadObjectWithRetry();
