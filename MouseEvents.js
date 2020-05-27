// MouseEvent

// The MouseEvent interface represents events that occur due to the user interacting with a mouse. Common events using this interface include click, dblclick, mouseup, mousedown.

// MouseEvent derives from UIEvent, which in turn derives from Event. 

// Several more specific events are based on MouseEvent, including WheelEvent and DragEvent.

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// click
// clearBtn.addEventListener('click', runEvent);

//Doubleclick 
// clearBtn.addEventListener('dblclick', runEvent);

//

// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);


// event handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;


}