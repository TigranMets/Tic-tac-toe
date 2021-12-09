let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let player = 'X';
let scoreX = 0;
let scoreO = 0;
let scoreTie = 0;

let squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('click', write));

playerChanger = false;
let clickCount = 0;

function write() {
    var row = Number(this.getAttribute("name"));
    var column = Number(this.getAttribute("id"));
    if (!playerChanger) {
        board[row][column] = player;
        player = 'O';
        let x = document.createElement('IMG');
        x.classList.add('x');
        x.src = 'https://www.vippng.com/png/full/493-4930781_letter-png-white-x-letter-png.png';
        this.appendChild(x);
        playerChanger = true;
        clickCount++;
        this.removeEventListener('click', write);
    } else {
        board[row][column] = player;
        player = 'X';
        let o = document.createElement('IMG');
        o.classList.add('o');
        o.src = 'https://media-s3-us-east-1.ceros.com/optiv/images/2018/10/09/0677daa19a3b6628a3bda54a769f456f/optiv-o.png?imageOpt=1&fit=bounds&width=1126';
        this.appendChild(o);
        playerChanger = false;
        this.removeEventListener('click', write);
        clickCount++;
    }
    if (clickCount >= 5) {
        check();
    }
}

function check() {
    if (board[0].every((el) => { return el === "X" }) ||
        board[1].every((el) => { return el === "X" }) ||
        board[2].every((el) => { return el === "X" }) ||
        board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X' ||
        board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X' ||
        board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X' ||
        board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X' ||
        board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
        scoreChanger(++scoreX, 'x');
    } else if (board[0].every((el) => { return el === "O" }) ||
        board[1].every((el) => { return el === "O" }) ||
        board[2].every((el) => { return el === "O" }) ||
        board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O' ||
        board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O' ||
        board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O' ||
        board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O' ||
        board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
        scoreChanger(++scoreO, 'o');
    }
    else if (clickCount >= 9) {
        scoreChanger(++scoreTie);
    }
}

function scoreChanger(score, xo) {
    let node = document.createElement('SPAN');
    let textnode = document.createTextNode(`${score}`);
    node.appendChild(textnode);
    if (xo == 'x') {
        document.querySelector('.scoreX').appendChild(node);
    } else if (xo == 'o') {
        document.querySelector('.scoreO').appendChild(node);
    } else {
        document.querySelector('.tie').appendChild(node);
    }
    squares.forEach(square => square.removeEventListener('click', write));
    setTimeout(() => {
        document.querySelector('.ticTacToeWrapper').addEventListener('click', refreshGame);
    }, 20);
    }

function refreshGame() {
    let allXO = document.querySelectorAll('img');
    allXO.forEach(XO => XO.remove());
    squares.forEach(square => square.addEventListener('click', write));
    document.querySelector('.ticTacToeWrapper').removeEventListener('click', refreshGame);
    clickCount = 0;
}