const button = document.querySelector("button")
const feedback = document.getElementById("feedback")


// Detect any mouse down events on the button
button.addEventListener("mousedown", treatMouseDown)


function treatMouseDown(event) {
  // Create a promise that will resolve with a quick click or reject
  // if the mouse is held down for too long.
  const promise = new Promise(clickOrHold)

  // Call the promise's `then` method, to define which functions will
  // be called on resolve or on reject. (Functions appear below.)
  promise.then(ifClicked, ifTimedOut)

  function ifClicked(result) {
    feedback.innerText = `${result}! You clicked the button`
  }

  function ifTimedOut(reason) {
    feedback.innerText = `${reason}! You held the button down`
  }
}


// The resolver function. This is called by the Promise instance
// immediately after the promise is created. The promise sends as 
// arguments pointers to its own internal `resolve` and `reject` methods
function clickOrHold(resolve, reject) {
  // Create two ways to settle the Promise:
  // resolve with a quick mouseup...
  document.documentElement.addEventListener("mouseup", treatMouseUp)
  // ... or reject if the mouseup is delayed
  setTimeout(treatTimeOut, 500)

  // NOTE 1: both treatMouseUp AND treatTimeOut will be called, but
  // only the first to be called will affect the promise. The second
  // function to be called (resolve or reject) will be ignored by the
  // the promise.

  // NOTE 2: The mouseup event listener is added to
  // document.documentElement so that it will be triggered even if the
  // mouse has moved off the button before it is released.

  function treatMouseUp() {
    console.log("mouseup event received")
    resolve("mouseUp")
  }

  function treatTimeOut() {
    console.log("timeout triggered")
    reject("timeOut")
  }
}

