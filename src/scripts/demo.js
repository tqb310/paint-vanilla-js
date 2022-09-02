let canvas = document.querySelector('#draw');
let arr = document.querySelectorAll('.container__child-item');
console.log(canvas.getBoundingClientRect())

let isMouseUp = true;
let selectColor = 'red';
let colors = ['red','yellow','orange','green','blue','indigo','purple']
canvas.addEventListener('mousemove', (e) => {
    if (isMouseUp)
        return;
    //console.log(e.clientX);
    let { top, left } = canvas.getBoundingClientRect();
    render(e.clientX - left - 10, e.clientY - top + 35, selectColor);
})
canvas.addEventListener('mouseup', (e) => {
    isMouseUp = true;
})
canvas.addEventListener('mousedown', (e) => {
    isMouseUp = false;
})

function render(x, y, color) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    let circle = new Path2D();
    circle.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill(circle);
}

function abc(){
    arr.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(colors[index]);
            selectColor = colors[index];
        })
    })
}

abc();