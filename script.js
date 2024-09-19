// ------------------------------------------------
// Function to set color based on id selection
// ------------------------------------------------

const setColor = (id) => {
  // select the element from the document
  const element = document.getElementById(id);
  // if the element has no children, change the background to blue
  if (element.innerHTML == "") element.style.background = "red";
}


// ------------------------------------------------
// Function to unset color based on id selection
// ------------------------------------------------

const unsetColor = (id) => {
  // select the element from the document
  const element = document.getElementById(id);
  // change assigned background color to null (no value)
  element.style.background = null;
}

// ---------------------------------------------------------
// Function to set a value in a box based on the player
// ---------------------------------------------------------

/* create a counter to keep track of players' turn */
let counter = 0;

const setValue = (id) => {
  /* Get the element from the document */
  const element = document.getElementById(id);

  /* get the size of the tic tac toe box, since we know each */
  /* table row has 3 table data, we multiply the length of tr to 3 */
  const boxSize = document.getElementsByTagName('tr').length * 3;

  /* Start a loop that continues until it is equal to the tic toc toe box */
  while (counter < boxSize) {
    /**
     * If a counter is divisible by 2 and the box is empty, place an X, 
     * then increment the counter
    **/
    if (counter % 2 === 0 && element.innerText === ''){
      element.innerText = 'X';
      counter += 1;

    /** 
    * If counter is not divisible by 2 and the box is empty, 
    * place an O, then increment the counter
    **/
    } else if (counter % 2 === 1 && element.innerText == '') {
      element.innerText = 'O';
      counter += 1;

      // Else return, end execution. (do not add a value, that 
      // means the box is filled)
    } else {
      return;
    }
  }
  
}
