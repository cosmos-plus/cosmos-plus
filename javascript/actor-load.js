
window.addEventListener('load',   console.log ("Actor Icon Javascript Loaded"));


function validateActorImages() {
  for (let i = 1; i <= 3; i++) {
    // Get the image element for each actor
    const imgElement = document.getElementById(`actor-${i}-image`);
    if (!imgElement) continue; // Skip if the image element is missing

    // Define a regex pattern for the src (actor-1 to actor-3 with wildcards)
    const wildcardPattern = new RegExp(`^cast-images/actor-${i}-.*?/.*?-lmid\\.webp$`);

    // List of files (this would typically come from a directory or database)
    const files = [
      'cast-images/actor-1-image01/someimage-lmid.webp',
      'cast-images/actor-2-image02/anotherimage-lmid.webp',
      'cast-images/actor-3-image03/differentimage-lmid.webp',
      // Add other potential file paths here
    ];

    // Find the file that matches the pattern
    const matchingFile = files.find(file => wildcardPattern.test(file));

    // If a matching file is found, set it as the src for the image element
    if (matchingFile) {
      imgElement.src = matchingFile;
    } else {
      console.warn(`No matching image found for actor ${i}`);
    }
  }
}

// Run the validation
validateActorImages();
