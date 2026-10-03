// let image = ["image copy 32.png","image copy 33.png","image copy 34.png","image copy 35.png"];
// let currentIndex = 0;
// let imgslider = document.getElementById("slider");
// console.log(imgslider);


// function showSlide(Index){
//  imgslider.src = image[Index];

// }
// showSlide(currentIndex);

// function nextSlide(){
//     currentIndex =(currentIndex + 1)% image.length;
//     showSlide(currentIndex);
// }
// function preSlide(){
//     currentIndex =(currentIndex-1+image.length)% image.length;
//     showSlide(currentIndex);
// }
//     setInterval(nextSlide,3000);

let image = [
    "image copy 32.png",
    "image copy 33.png",
    "image copy 34.png",
    "image copy 35.png"
];

let currentIndex = 0;

let imgslider = document.getElementById("slider");

console.log(imgslider);
 // Isme <img ...> aana chahiye
console.log(image);

function showSlide(index) {
    imgslider.src = image[index];
}

showSlide(currentIndex);

function nextSlide() {
    currentIndex = (currentIndex + 1) % image.length;
    showSlide(currentIndex);
}

function preSlide() {
    currentIndex = (currentIndex - 1 + image.length) % image.length;
    showSlide(currentIndex);
}

//setInterval(nextSlide, 3000);