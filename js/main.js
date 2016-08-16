/**
 * Created by Anthony on 8/15/2016.
 */

// TODO: add the ability to see non-character keys pressed
function initialize() {
    // text box
    var userInput = document.getElementById("userInput");
    userInput.maxLength = 1;

    // key down
    userInput.addEventListener("keydown", function(e) {
        // erase the previous char
        userInput.value = "";
        // display key down key code
        document.getElementById("keydown_event").innerHTML = e.keyCode;
    }, false);

    // key press
    userInput.addEventListener("keypress", function(e) {
        // display key press key code
        document.getElementById("keypress_event").innerHTML = e.keyCode;
    }, false);

    // key up
    userInput.addEventListener("keyup", function(e) {
        // display key up key code
        document.getElementById("keyup_event").innerHTML = e.keyCode;
    }, false);

}

// when window loads, call initialize to set more event listeners
window.addEventListener('load', initialize, false);
