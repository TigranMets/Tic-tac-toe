let squares = document.querySelectorAll('.square');

let clickCount = false;
let firstItem;
let secondItem;

squares.forEach(square => square.addEventListener('click', write));

function write() {
    if (!clickCount) {
        let x = document.createElement('IMG');
        x.src = 'https://www.vippng.com/png/full/493-4930781_letter-png-white-x-letter-png.png';
        this.appendChild(x);
        firstItem = this;
        clickCount = true;
    } else {
        let o = document.createElement('IMG');
        o.src = 'https://media-s3-us-east-1.ceros.com/optiv/images/2018/10/09/0677daa19a3b6628a3bda54a769f456f/optiv-o.png?imageOpt=1&fit=bounds&width=1126';
        this.appendChild(o);
        secondItem = this;
        clickCount = false;
    }
    debugger;
}

debugger;
