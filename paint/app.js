window.oncontextmenu = function ()
{
  return false;     // cancel default menu
    showCustomMenu();
}

document.body.onclick = function (e) {
  var isRightMB;
  e = e || window.event;

  if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
      isRightMB = e.which == 3; 
  else if ("button" in e)  // IE, Opera 
      isRightMB = e.button == 2; 

  if (isRightMB) {
    draw();
  }
  // alert("Right mouse button " + (isRightMB ? "" : " was not") + "clicked!");
} 

// obtener la referencia del canvas
var canvas = document.getElementById("draw");

// obtener el contexto donde dibujaremos en el canvas
var ctx = canvas.getContext("2d");
resize();

// establecer el tamaño del camvas al tamaño de la pagina web
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// Agregamos eventos
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// ultima posicion del cursor
var pos = { x: 0, y: 0 };
//ola
// obtenemo la posicion actual del cursor del evento
function setPosition(e) {
  pos.x = e.clientX-7;
  // pos.x = e.clientX;
  pos.y = e.clientY-42;
  // pos.y = e.clientY;
}

let color = '#000000';
function setColor(newcolor) {
  console.log(newcolor);
  color = newcolor;
}

function draw(e) {
  console.log('hola', e.buttons);
  if (e.buttons === 0) return; // if mouse is pressed.....
  var tamaño = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = Number(tamaño); // width of lineS
  ctx.lineCap = "round"; // rounded end cap

  if (e.buttons === 2) {
    ctx.strokeStyle = '#ffffff';
  } else {
    ctx.strokeStyle = color; // hex color of line
  }
  // ctx.strokeStyle = "#4e0f70"; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}