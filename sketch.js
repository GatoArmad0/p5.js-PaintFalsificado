function setup() {
    createCanvas(800, 800);
    background("white");
  }
  
  function draw() {
    
    
    stroke("black")
    fill("black")
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 40)
    }  
  }
  