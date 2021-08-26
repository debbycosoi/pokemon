var prpt = prompt("What is you name?")
console.log(prpt)


var name1 = document.getElementById("name");

name1.innerHTML = `Hello ${prpt}`


var Pikachu = document.getElementById("Pikachu");

var Charmander = document.getElementById("Charmander");

var Bulbasaur = document.getElementById("Bulbasaur");

function pokemonPikachu(){
    alert("This is Pikachu")

}

function pokemonCharmander(){
    alert("This is Charmander")

}

function pokemonBulbasaur(){
    alert("This is Bulbasaur")

}
 
function changeImgPika() {
    var image = document.getElementById('pika');
    if (image.src.match("http://pngimg.com/uploads/pokeball/pokeball_PNG30.png")) {
        image.src = "https://www.pngitem.com/pimgs/m/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png";
    }
    else {
        image.src = "http://pngimg.com/uploads/pokeball/pokeball_PNG30.png";
    }
}

function changeImgBul() {
    var image = document.getElementById('Bul');
    if (image.src.match("http://pngimg.com/uploads/pokeball/pokeball_PNG30.png")) {
        image.src = "https://www.nicepng.com/png/detail/99-991806_bulbasaur-pokemon-bulbasaur-png.png";
    }
    else {
        image.src = "http://pngimg.com/uploads/pokeball/pokeball_PNG30.png";
    }
}


function changeImgChar() {
    var image = document.getElementById('Char');
    if (image.src.match("http://pngimg.com/uploads/pokeball/pokeball_PNG30.png")) {
        image.src = "https://www.kindpng.com/picc/m/117-1172438_charmander-vector-transparent-transparent-charmander-png-png-download.png";
    }
    else {
        image.src = "http://pngimg.com/uploads/pokeball/pokeball_PNG30.png";
    }
}


