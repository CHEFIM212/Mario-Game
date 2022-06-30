const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
    
        mario.classList.remove('jump')

    }, 500);

}

const loop = setInterval(() => {

    console.log('loop')

    var btn = document.querySelector("#refresh");

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animatiom = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animatiom = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'

        clearInterval(loop);

        var btn = document.querySelector("#refresh");
        btn.addEventListener("click", function() {
            
            location.reload();
        });
    }

    
}, 10);

document.addEventListener('keydown', jump);