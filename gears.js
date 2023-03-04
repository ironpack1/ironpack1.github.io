const numBoxes = 6;
const boxes = [];
const coordinates = [];
const speed = 0.1;
const DEG_TO_RAD = Math.PI / 180;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
var myInterval = setInterval(tick, 0);
var lastUpdate = Date.now();
var deltaTime =  Date.now() - lastUpdate;

function tick()
{
    var now = Date.now();
    this.deltaTime = now - lastUpdate;
    lastUpdate = now;
}

function speen(box, offset) 
{
    let angle = coordinates[offset];

    function updateBox() 
    {
        angle += DEG_TO_RAD * speed * deltaTime;
        let x = windowWidth / 2 + radius * Math.cos(angle);
        let y = windowHeight / 2 + radius * Math.sin(angle);
        box.style.left = x + 'px';
        box.style.top = y + 'px';
        coordinates[offset] = angle;
        requestAnimationFrame(updateBox);
    }

    updateBox();
}

function main() 
{
    for(let i = 0; i < numBoxes; i++) 
    {
        boxes.push(document.getElementById("box" + (i+1)));
        coordinates.push(i * (2 * Math.PI / numBoxes));
        speen(boxes[i],i);
    }
}

main();

window.onresize = function()
{ 
    radius = Math.min(window.innerWidth, window.innerHeight) * 0.4; // update the radius based on the new screen size
    location.reload(); 
  } 
