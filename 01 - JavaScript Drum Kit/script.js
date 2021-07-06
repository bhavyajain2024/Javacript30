window.addEventListener('keydown', function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        console.log('The keystroke is not registered for drum kit');
        return;
    }
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
})