let input, button;

function setup() {
  // create canvas
  createCanvas(416, 30);

  input = createInput();
  input.position(20, 65);

  button = createButton('Show');
  button.position(input.x + input.width, 65);
  button.mousePressed(showLowerThird);

  textAlign(CENTER);
  textSize(50);
}

function showLowerThird() {
  nodecg.sendMessage('showLowerThird', input.value())
}