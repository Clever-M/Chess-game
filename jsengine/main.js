var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth -15;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

//This function will decide the color of a square
//dependin on the row it is on the board
function decideColor(i, j)
{
    var white = "rgba(193,154,107)";
    var black = "rgba(102,51,0)"

    if( i%2 == 0)
    {
        if(j%2 == 0)
        {
            return black;
        }
        else
        {
            return white;
        }
    }
    else
    {
        if(j%2 == 0)
        {
            return white;
        }
        else
        {
            return black;
        }

    }
}

//this function tiles the board
function tileBoard()
    {
        var x = 200;
        var y = 0;
        c.filter = "blur(2px)"
        c.fillStyle = "rgba(0, 0, 0, 0.7)";
        c.fillRect(x + 20, y + 20, 80*8, 80*8)
        c.filter = "blur(0px)"
        var squareColor = null;
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++)
            {
                c.fillStyle = decideColor(i,j);
                c.fillRect(x, y, 80, 80);
                x = x + 80;
            }
            y = y + 80;
            x = 200;
        }

    }
tileBoard();
console.log(canvas);
