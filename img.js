function previewImage(image) {
  const previewContainer = document.getElementById("preview-container");
  const previewImage = document.getElementById("preview-image");
  previewImage.src = image.src;
  previewContainer.style.display = "block";
}

function closePreview() {
  const previewContainer = document.getElementById("preview-container");
  previewContainer.style.display = "none";
}
