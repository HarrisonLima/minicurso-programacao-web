var audio = document.getElementById('audioPlay');

var cardThings = document.getElementById('cardThings');
var cardCante = document.getElementById('cardCante');
var cardFerroriginalremix = document.getElementById('cardFerroriginalremix');
var cardMoveyourbody = document.getElementById('cardMoveyourbody');
var cardDreams = document.getElementById('cardDreams');

audio.volume = 0.2;

cardThings.addEventListener("click", function() {
    audio.src = "./contents/audios/things.mp3";
    audio.play();  
})

cardCante.addEventListener("click", function() {
    audio.src = "./contents/audios/cante-por-nos.mp3";
    audio.play();  
})
cardFerroriginalremix.addEventListener("click", function() {
    audio.src = "./contents/audios/free-original.mp3";
    audio.play();  
})
cardMoveyourbody.addEventListener("click", function() {
    audio.src = "./contents/audios/move-your-body.mp3";
    audio.play();  
})
cardDreams.addEventListener("click", function() {
    audio.src = "./contents/audios/cali-dreams.mp3";
    audio.play();  
})

