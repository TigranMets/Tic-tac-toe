let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let player = 'X';

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
        console.log(board);
        let x = document.createElement('IMG');
        x.src = 'https://www.vippng.com/png/full/493-4930781_letter-png-white-x-letter-png.png';
        this.appendChild(x);
        playerChanger = true;
        clickCount++;
        this.removeEventListener('click', write);
    } else {
        board[row][column] = player;
        player = 'X';
        console.log(board);
        let o = document.createElement('IMG');
        o.src = 'https://media-s3-us-east-1.ceros.com/optiv/images/2018/10/09/0677daa19a3b6628a3bda54a769f456f/optiv-o.png?imageOpt=1&fit=bounds&width=1126';
        this.appendChild(o);
        playerChanger = false;
        this.removeEventListener('click', write);
        clickCount++;
    }
    check();
}

function check() {
    if (board[0].every((el) => { return el === "X" }) ||
        board[1].every((el) => { return el === "X" }) ||
        board[2].every((el) => { return el === "X" }) ||
        board[0].every((el) => { return el === "O" }) ||
        board[1].every((el) => { return el === "O" }) ||
        board[2].every((el) => { return el === "O" }) ||
        board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X' ||
        board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X' ||
        board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X' ||
        board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O' ||
        board[1][0] == 'O' && board[1][2] == 'O' && board[2][2] == 'O' ||
        board[0][0] == 'O' && board[1][2] == 'O' && board[2][2] == 'O' ||
        board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X' ||
        board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X' ||
        board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O' ||
        board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
        console.log('you won');
    }
    else if (clickCount >= 9) {
        console.log('tie');
    }
    else {
        console.log('waiting');
    }
}
