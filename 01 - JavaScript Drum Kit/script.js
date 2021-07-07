

function playSound(e){
    
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // .class [attribute selector]
    const element = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        console.log('The keystroke is not registered for drum kit');
        return;
    }
    audio.currentTime = 0;
    audio.play();
    element.classList.add('playing');
    
}
function removeClass(e){
    if(e.propertyName == "transform"){
        this.classList.remove('playing');
    }
}

key_all = document.querySelectorAll('.key');

key_all.forEach(element => {
    element.addEventListener('transitionend', removeClass)
});

window.addEventListener('keydown', playSound);