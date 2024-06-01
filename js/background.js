const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "backgroundImage";

document.body.appendChild(bgImage);