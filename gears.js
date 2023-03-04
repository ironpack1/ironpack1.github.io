const numBoxes = 6;
    var boxes = [];
    var coordinates = [];
    const speed = 0.1;
    var radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
    function wait(time)
    {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    function speen(box, offset)
    {
        setInterval(function()
        {
            var angle = coordinates[offset] + (Math.PI / 180) * speed;
            var x = window.innerWidth / 2 + radius * Math.cos(angle);
            var y = window.innerHeight / 2 + radius * Math.sin(angle);
            box.style.left = x + 'px';
            box.style.top = y + 'px';
            coordinates[offset] = angle;
        }, 0.01);
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
    window.onresize = function(){ location.reload(); }