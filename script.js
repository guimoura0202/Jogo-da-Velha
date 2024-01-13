//Initial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}
let turn = '';
let warning = '';
let playing = true;

//Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.area div').addEventListener('click', );

//Functions
function reset (){
    warning = '';
    randomPlayer();
}
function randomPlayer (){
    let random = Math.floor(Math.random() * 2);
    if(random === 0 ){
        player = 'X';
    }else{
        player = 'O';
    }
}
function changePlayer (player){
    if(player == 'X'){
        player = 'O';
    }else{
        player =='X';
    }
}