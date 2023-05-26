var animalImg=document.querySelector('#fav-animal');
console.log(animalImg.src);

function pickCat(){
    animalImg.src="gato.jpeg";
}
function pickDog(){
    animalImg.src="perro.jpeg";
}