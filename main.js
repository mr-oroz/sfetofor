const time = document.body.children[1].children[1].children[0]
const time2 = document.body.children[0].children[1].children[0]
// const green = document.getElementById('green')
// const green_2 = document.getElementById('green_2')
// const red = document.getElementById('red')
// const red_2 = document.getElementById('red_2')
console.dir(green)
let second = 15;
let found = true
const myFunc = () => {
    second--;
    time.innerText = second
    time2.innerText = second
    if (second < 1) {
        second = 15;
        // red.style.backgroundColor = 'red'
        // green.style.backgroundColor = 'green'
        // red_2.style.backgroundColor = 'red'
        // green_2.style.backgroundColor = 'green'
    }
}

setInterval(myFunc, 1000);