const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );

function lampOn(){
    lamp.src = './ligada.png';
}
function lampOff(){
    lamp.src = './desligada.png';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
