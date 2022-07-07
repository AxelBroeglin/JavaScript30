let audio = new Audio('sounds/clap.wav');
let keys = Array.from(document.querySelectorAll('.key'));
let key65 = document.querySelector('.key65');
audio.play()

// keys.forEach(key => {
//     addEventListener('click', playSound)
// });

// function playSound(){
//     console.log(e.dataset.key);
// }

key65.addEventListener('click', fiak)

function fiak(){
    console.log(key65.dataset.key)
}