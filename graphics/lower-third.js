let colour, nameElement;
const xPos = 150;
const yPos = 1080;

const animationTime = 2000;
const showTime = 3000;
const animationSpeed = 3; // Changes final height, reduce animation time to make shorter

let translateOnY = 0;

const animationStates = { Static: 0, Showing: 1, Hiding: 2 };   // State enum
let animationState = animationStates.Static;    // Initial state

function setup() {
	frameRate(60);
	createCanvas(1920, 1080);
	colour = color('#E69500');
	fill(colour);
	noStroke();

	nameElement = createElement('h1', 'Testing name');
	nameElement.style('font-family', 'sans-serif');
	nameElement.style('color', '#FFFFFF');
	nameElement.position(xPos + 10, yPos);
}

function draw() {
	clear();

	if (animationState == animationStates.Showing) {
		translateOnY -= 5;
	} else if (animationState == animationStates.Hiding) {
		translateOnY += 5;
	}

	translate(0, translateOnY);

	rect(
		xPos,
		yPos,
		nameElement.size().width + 20,
		nameElement.size().height + 40
	);
	nameElement.position(xPos + 10, yPos + translateOnY);
}

nodecg.listenFor('showLowerThird', name => {
	nameElement.html(name);
	show();
});

function show() {
    animationState = animationStates.Showing;

    setTimeout(() => {
		animationState = animationStates.Static;
        setTimeout(hide, showTime);
    }, animationTime);
}

function hide() {
	animationState = animationStates.Hiding;
	setTimeout(() => {
		animationState = animationStates.Static;
	}, animationTime);
}
