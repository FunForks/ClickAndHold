# Click and Hold

Instructions

1. Create a simple web page
2. Add two elements to the page: a button and a paragraph
3. Set the CSS for the paragraph so that it is visible even if it is empty
4. Attach a JavaScript file to your page
5. Add an eventListener to the button to listen for "mousedown"
6. If the user makes a simple click on the button (mousedown - mouseup) then display "You clicked the button" in the paragraph element
7. If the user clicks and holds for more than 250 ms before releasing the mouse, display "You're holding the button down", even before the mouse is released.

You _can_ solve this without using a Promise. However, the task is to create a promise which will be resolved if the user releases the button quickly and rejected if the user holds the button down for more than 250 ms.