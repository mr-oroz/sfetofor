
const green = document.getElementById('green')
const green2 = document.getElementById('green2')
const red = document.getElementById('red')
const red2 = document.getElementById('red2')
const spans = document.getElementsByTagName('span');
const yellow = document.getElementsByClassName('yellow')[0]
let second = 10;
let show = 0;


setInterval(() => {
    spans[0].innerText = second;
    spans[1].innerText = second;
    second--;
    setTimeout(() => {
        if (second < 5) {
            spans[0].style.display = 'none';
            spans[1].style.display = 'none';
        }
    }, 300);
    spans[0].style.display = 'block';
    spans[1].style.display = 'block';
    if (second === -1) {
        second = 10
        show = show === 1 ? 2 : 1
    }
    if (show === 1) {
        red.style.backgroundColor = 'red';
        green.style.backgroundColor = 'black';
        red2.style.backgroundColor = 'black';
        green2.style.backgroundColor = 'green';
    } else if (show === 2) {
        red.style.backgroundColor = 'black';
        green.style.backgroundColor = 'green';
        red2.style.backgroundColor = 'red';
        green2.style.backgroundColor = 'black';
    }
}, 1000);