const fs = require('fs');

const imageDir = "C:/Users/sevda/OneDrive/Masaüstü/shinkai v2/bg"; // Replace with the path to your image directory
const jsonFile = 'C:/Users/sevda/OneDrive/Masaüstü/shinkai v2/js/images.json'; // Replace with the path to your JSON file

const imageFiles = fs.readdirSync(imageDir)
  .filter(file => file.endsWith('.jpg') || file.endsWith('.webp') || file.endsWith('.png'));

const jsonData = { images: imageFiles };
const jsonString = JSON.stringify(jsonData, null, 2);

fs.writeFileSync(jsonFile, jsonString);
