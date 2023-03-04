const hObj = document.getElementById('boy');
newText = "";
i = 0;
rDelay = 50;
aDelay = 100;


function removeText()
{
    setTimeout(function()
    {
        hObj.innerHTML = hObj.innerHTML.substring(0,hObj.innerHTML.length - 1);
        if(hObj.innerHTML.length > 0)
        {
            removeText();
        }
    }, 200)
}

function changeText()
{
    removeText();
    console.log("why");
}

function main()
{
    changeText();
}

main();
