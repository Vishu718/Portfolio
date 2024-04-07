const cursor = document.querySelector('');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 0.01;

function animate() {
  let distX = mouseX - cursorX;
  let distY = mouseY - cursorY;

  cursorX = cursorX + (distX * speed);
  cursorY = cursorY + (distY * speed);

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  requestAnimationFrame(animate);
}


animate();

document.addEventListener('mousemove', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
})



( function( $ ) {

	"use strict";

  $(".card").tilt({
    maxTilt: 15,
    perspective: 1500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    glare: false,
    maxGlare: 0.2,
    scale: 1.01
  });
  
}( jQuery ) );