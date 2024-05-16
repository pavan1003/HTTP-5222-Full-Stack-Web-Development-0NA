//Import the module 
import { addItem, getItemCount } from './module.js';

// Add items to the collection. This is an example of Blocking code
addItem('apples');
console.log("Count after adding apples", getItemCount());
addItem('oranges');
console.log("Count after adding oranges", getItemCount());
addItem('cherries');
console.log("Count after adding cherries", getItemCount());

// This setTimeout function is an example of Non-Blocking code because it doesn't block line 20 from executing when setTimeout has not completed yet.
setTimeout(() => {
    console.log("Non-blocking console log inside setTimeout");
}, 1000);

// This console log executes before the set timeout console log.
console.log("Console log after the setTimeout");