let counterElement;

// Access NodeCG replicant
const counterRep = nodecg.Replicant('counter');

function setup() {
	// Create H1 element
	counterElement = createElement('h1', '0');

	// Styling
	counterElement.style('font-family', 'sans-serif');	// Set font to sans serif
	counterElement.style('background', '#0D47A1');	// Background colour
	counterElement.style('border-radius', '5px');	// Rounder corners
	counterElement.style('color', '#FFFFFF');		// Font colour
	counterElement.style('padding', '10px');		// Make space between edge of box and text

	// Position
	counterElement.position(0, 0);
}

// Every change the replicant does will trigger this
counterRep.on('change', newVal => {
	counterElement.html(newVal);	// Update text
});