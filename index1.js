// Use * to Import Everything from a file
import * as capitalizeString from "capitalize_strings";


//Create an Export Fallback with export default
//export default function subtract(x,y) {return x-y;} // "maths_functions"

// Import a Default Export
import subtract from "maths_functions";
console.log(subtract(7,4));