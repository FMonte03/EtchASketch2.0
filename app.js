

const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');



canvas.width = window.innerWidth - canvas.offsetLeft - 100;
canvas.height = window.innerHeight - canvas.offsetTop - 50;  





let painting = false; 
let lineWidth = 5; 

ctx.lineWidth = lineWidth  ;


function mouseD(){
    painting = true;

}

function mouseU(){
    painting= false; 
    ctx.beginPath();

}

function draw(e){
    if(!painting) return; 
    ctx.lineCap = "round";
   
    ctx.lineTo(e.clientX - canvas.offsetLeft   , e.clientY - canvas.offsetTop  ); 
    ctx.stroke(); 
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop ); 

}

//change size of stroke

let slider = document.querySelector('.slider'); 
slider.addEventListener('change', () => { ctx.lineWidth = slider.value;
})

//change color of stroke
let color = document.querySelector('#color'); 
color.addEventListener('change', () => {ctx.strokeStyle = color.value; })

//clear canvas
const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    slider.value = 5; 
    color.value = '#000000'
    ctx.lineWidth = slider.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
} )


function downloadImage() {

    let data = canvas.toDataURL("image/png");
    let a = document.createElement('a');
    a.href = data
    a.download = 'canvas-download.jpeg';
    a.click();
}

let download = document.getElementById('downloadBtn')
download.addEventListener('click', downloadImage)


//canvas action listerner to draw lines. 
canvas.addEventListener('mousedown', mouseD); 
canvas.addEventListener('mouseup', mouseU); 
canvas.addEventListener('mousemove', draw); 