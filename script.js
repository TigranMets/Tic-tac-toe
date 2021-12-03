let squares = document.querySelectorAll('.square');

let clickCount = false;
let x;
let o;

squares.forEach(square => square.addEventListener('click', write));

function write() {
    if(!clickCount){
        this.innerText = 'X';
        x = this;
        clickCount = true;
    } else {
        this.innerText = 'O';
        o = this;
        clickCount = false; 
    }
    debugger;
}