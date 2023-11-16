let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
let wrapper = document.querySelector(".wrapper-img");
let image = document.querySelector("img");

let images = [
  "https://summerswintersg.com/cdn/shop/products/image_7ae955c4-4a38-45ee-96d0-0d1e4f134227.jpg?v=1650115607",
  "https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-3bp5t46z/content/img/home/birthday-flowers-uk-london-moyses.jpg",
];

let number = 0;

function showImage() {
  image.src = images[number];
  console.log(image)
}

buttons[1].addEventListener("click", function () {
  if (number < 2) {
    number = number + 1;
    showImage();
  } else {
    number = 0;
    showImage();
  }
  console.log(number);
});


function showImage() {
    image.src = images[number];
    console.log(image)
  }
  

buttons[0].addEventListener("click", function () {
   if (number > 0) {
    number = number -1;
    showImage()
   } else {
    number = images.length -1;
  }
});

showImage();