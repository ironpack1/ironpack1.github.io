const numBoxes = 6;
var boxes = [];
var coordinates = [];
const speed = 0.5;
var radius = Math.min(window.innerWidth, window.innerHeight) * 0.3; // calculate the radius based on the screen size
function wait(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

function speen(box, offset)
{
    var angle = coordinates[offset];
    function updateBox()
    {
        angle += (Math.PI / 180) * speed;
        var x = window.innerWidth / 2 + radius * Math.cos(angle);
        var y = window.innerHeight / 2 + radius * Math.sin(angle);
        box.style.left = x + 'px';
        box.style.top = y + 'px';
        coordinates[offset] = angle;
        requestAnimationFrame(updateBox);
    }
    updateBox();
}

async function main()
{
    for(i = 0; i < numBoxes; i++)
    {
        boxes.push(document.getElementById("box" + (i+1)));
        var offsetAngle = i * (2 * Math.PI / numBoxes);
        coordinates.push(offsetAngle);
        speen(boxes[i],i);
    }
}

main();
window.onresize = function(){ 
  radius = Math.min(window.innerWidth, window.innerHeight) * 0.4; // update the radius based on the new screen size
  location.reload(); 
}