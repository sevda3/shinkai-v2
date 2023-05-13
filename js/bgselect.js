const imagesUrl = './js/images.json'; // Replace with the URL of your JSON file

function bgSelect(){fetch(imagesUrl)
  .then(response => response.json())
  .then(data => {
    const images = data.images;

    if (images.length === 0) {
      console.log('No images found in folder');
    } else {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImage = images[randomIndex];
      const imagePath = `./bg/${randomImage}`;

      // Set the background image of the body element
      document.body.style.backgroundImage = `url(${imagePath})`;
    }
  })
  .catch(error => console.error(error));
}
