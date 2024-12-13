// Global Variables
// Global Variables can be declared outside a function scope or within the window object.
// for example
let value = 100; // global variable
function globalvar() {
    alert(value); 
}
globalvar();

function newGlobe() {
    window.value = 500; // global variable
}

function addGlobal() {
    alert(window.value);
}

newGlobe();
addGlobal();

