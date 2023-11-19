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

    // There are two cases where the square should be black:
    // 1. When both column and line are even (when you sum two 
    //    even numbers, the result is always an even number)
    // 2. When both column and line are odd (when you multiply
    //    two odd numbers, the result is always an odd number)
    
    if((j + i) % 2 == 0 || (j * i) % 2 != 0) return black;
    return white;
}

//this function tiles the board
function tileBoard()
    {
        var x = window.innerWidth/3;
        var y = 0 + window.innerHeight/6
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
            x = window.innerWidth/3;
        }
    }
function drawPawn(x, y, color)
{
    console.log(color == "black");
    c.fillStyle = color == "black" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + 20, y + 50);
    c.lineTo(x - 20, y + 50);
    c.lineTo(x, y);
    c.fill();
    c.stroke();

    c.beginPath();
    c.arc(x, y, 15, 0, 2 * Math.PI);
    c.fill();
    c.stroke()
}

tileBoard();
drawPawn(window.innerWidth/3 + 280, -425 + window.innerHeight, "black");
drawPawn(window.innerWidth/3 + 200, -425 + window.innerHeight, "white");