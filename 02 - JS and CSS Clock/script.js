function calcTime(){

    var second_hand = document.querySelector('.second-hand');
    const date = new Date();
    const seconds = date.getSeconds();
    const degree = ((seconds/60)*360)+90;
    second_hand.style.transform = `rotate(${degree}deg)`;
    

    var minute_hand = document.querySelector('.min-hand');
    var minutes = date.getMinutes();
    var deg_minutes = ((minutes/60)*360)+90;
    minute_hand.style.transform = `rotate(${deg_minutes}deg)`;

    var hour_hand = document.querySelector('.hour-hand');
    var hours = date.getHours();
    var deg_hours = ((hours/12)*360)+90;
    hour_hand.style.transform = `rotate(${deg_hours}deg)`;
    console.log(hours);
}

setInterval(calcTime, 1000);