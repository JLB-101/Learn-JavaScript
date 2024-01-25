//console.log("Hello from JavaScript");

var number = 5;//in-line

/**
 * other  comment
 * Data types:
 * underfined, null, boolean, string, symbol, number and object
 */

var myName = 'Beau';
myName = 8;

let ourName = 'freeCodeCamp';

const pi = 3.14;

var a;
var b = 17;
var c = 12
a=b;

//console.log(a+b);

//increment
a++;

//decrement
a--;

//floats
var x = 5.7

//multiply decimals

var product = 2.0 * 0.0;

// divide
var quotient = 4.4/2.0;

// finding a remainder

var r = 11 % 3;

// compound Assignment with Augmented Addition
a += 12;
b += 9;
c += 7;

// compound Assignment with Augmented multiplication
a -= 6;//a = a - 6;
b -= 15;//b = b -15;
c -= 1;//c = c -1;

// compound Assignment with Augmented division

a /= 12;
b /= 4;
c /= 11;



// Declare String Variables

//example:
var firstName = 'Alan';
var lastName = 'Turing';
//only change code below this line
var myFristName = 'Beau';
var myLastName = 'Carnes';

//Escaping Literal Quotes in Strings
var myStr = 'i am a \'double quoted\' string inside\'double quotes';
//console.log(myStr);

//Quoting Strings with Single Quotes
myStr = '<a href="http://" target="_blank">link</a>'

//Concatenating Strings with Plus Operator

var ourStr = " i com first." + "i come second";
//console.log(ourStr);

myStr = "This is the frist sentence. ";
myStr += "This is the second sentence."; 

//ex
ourName = "freeCodeCamp";
var ourStr = "@P21: Hello, our name is " + ourName + "how are you?";

// Only change code below this line
myName = "Beau"
myStr = "@P2: My name is " + myName + " and I am well!";
//console.log(myStr);

//Appending Variables to Strings

var anAdjective = "awesome!";
ourStr = "FreeCodeCamp is ";
ourStr += anAdjective;
// Only change code below this line

var someAdjective = "worthwhile"
myStr = "Learning to code is ";
myStr +=someAdjective;
//console.log(myStr);

// find the length of String 
var lastNameLength = 0;
lastName = "Baeu";
lastNameLength = lastName.length;
//console.log(lastNameLength);

// Bracket Notation to Find Frist Character in String 

//ex
var firstLetterOfFristName = "";
var firstName = "Ada";

firstLetterOfFristName = firstName[0];

// setup
var firstLetterOfLastName = "";
lastName = "Lovelace";


// only change code below this line
firstLetterOfLastName = lastName[0];//first latter[L]

// String immutability
//setup
myStr = "Jello World";
// only change code below this line
myStr = "Hello World";

// Bracket Notation to find Nth Character in String
var thirdLetterOfLastName = lastName[2];//[find]

// Bracket Notation to find last Character in String
var lastLetterofLastName = lastName[lastName.length-1];
//console.log(lastLetterofLastName);

// Bracket Notation to find Nth-to-last Character in String
var secondToLastLetterOfLastName = lastName[lastName.length-2];

// word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result+= "the " + myAdjective +" "+ myNoun +" "+ myVerb + " to the store "+ myAdverb+ " ";
    
     // Your code above this line
     return result;
}

// change the words here to test your function
//console.log(wordBlanks("dog", "big", "ran", "quickly"));

/**Store Multiple Values with Arrays */
//Example
var ourArray = ["John", 23];
// only change code below this line
var myArray = ["Quincy", 43];

// Nested Arrays or Multidimensional arrays
//Example
ourArray = [["John", 42], ["everything", 101010]];
// only change code below this line
var myArray = [["Bulls", 23], ["White sox", 45]];

// Access Array Data with Indexes
ourArray = [18,64,99];
ourArray[1]=45;//changing the value of index[1] to 45

//set up 
myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14,]];
// access
var myData = myArray[2][1];
//console.log(myData);

//Manipulate Arrays with push
ourArray = ["Stimpson", "J", "cata"];
ourArray.push(["Happy", "joy"]) 

// remove items from array
ourArray = [1,2,3];
var removedFromArray = ourArray.pop();
// removedFromOurArra now equals 3, and ourArray now equals [1,2]

// set 
myArray = [["Jose", 23], ["cat", 2]];
// only change code below this line
removedFromArray = myArray.pop();// myArray is now: [["Jose", 23]]

console.log(myArray);  

//Munipulate Arrays with shift()
ourArray = ["Stimpson", "J", ["cata"]];
removedFromArray = ourArray.shift();// stipmson is being removed: ["J", "cata"]
//setup
myArray = [["jose", 23], ["rex", 3]];
removedFromArray = myArray.shift();

//ex
ourArray = ["Stimpson", "J", "cata"];
ourArray.shift();// ourArray now equals ["J", "Cat"]
ourArray.unshift("Happy")//ourArray now equals ["Happy", "J", "cat"]

//setup
myArray = [["jose", 23], ["rex", 3]];
myArray.shift();

// only change code below this line
myArray.unshift(["Paul", 35]);
console.log("---------------------------------")
console.log(myArray);
 
/*************Shopping List *************/
//example:
var mylist = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 3],]

/**Write Reusable Code with Functions */
//ex:
function ourReusableFuncton () {
    console.log("Heyya, World!")
}
ourReusableFuncton();

// Only change code below this line
function reusableFuncton () {
    console.log("Hi, World!")
}
reusableFuncton();

// Passing values to Functions with Arguments

function ourfunctionWithArgs(a, b) {
    console.log("************************** \n: ("+a+" + "+b+") =  " + (a - b));
}
ourfunctionWithArgs(10, 5); // outputs 5

/************** GLOBAL SCOPE and FUNCTIONs ************** */
// Declare your variable here
// var myGlobal = 10;

// function fun1(){
//     // Assign 5 to oopsGLobal here
//     oopsGLobal = 5;
// }

// function fun2(){
//     var output = "";
//     if(typeof myGlobal != "underfined") {
//         output+="myGlobal: " + myGlobal;
//     }
//      if(typeof oopsGLobal != "underfined") {
//         output+="myGlobal: " + oopsGLobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();
// // Local Scope and Functions
// function myLocalScope () {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();

/**Global vs Scope in Functions */

 var outerWear = "T-Shirt";
 function myOutfit() {
     
     return outerWear;
 }
 
 console.log(myOutfit());
// Only change code below this line

// Return a value  from a function with Return
function minusSeven(num) {
    return num -7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));
// Understanding Undefined Value Returned from a Function
//Example:
console.log('========================================');
var sum = 0;
function addThree() {
    sum = sum + 3;
    // will not return nothing...R: Underfined Value...
   //return sum; // the return is key to not be undefined ..
}
console.log(addThree())

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(v){
    if(v <= 12) {
        // Change this line
        return "Smaller Than or Equal to 12";
    }
    if(v <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

//Comparisons with the Logical "And" Operator

function testLogicalAnd(v) {
    //Only change code below
    if(v <= 50 && v >= 25) {
            return "Yes";
    }
    //only change code above this line
    return "No";
}
testLogicalAnd(10);

//Comparisons with the Logical 'OR' Operator
function testLogicalOr(v) {
    //Only change code below
    if(v < 10 || v > 20) {
            return "outside";
    }
    //only change code above this line
    return "Inside";
}
testLogicalAnd(10);

/**ELSE STATEMENTS */
function testElse( ){
    var result = "";
    // Only change code below this line
    if(v > 5){
        result = "Bigger than 5";       
    }
    if(v <= 5) {
        result = "5 or Smaller";
    }
    //Only change code above this line
    return result;
}
//teste else If statements
function testElseIf(v) {
    if(v > 10){
        result = "Greater than 10";       
    }else if(v < 5) {
        result = "Smaller than 5";
    }else{
    //Only change code above this line
    return "Between 5 and 10";
    }
}

// Logical Order in If Else Statements
function orderMyLogic(v){
    if(v < 10) {
        return "Less than 10";       
    } else if(v < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(3);
//Chaining If Else Statements

function testSize(n){
    if( n < 5) {
        return "Tiny";
    } 
    else if(n < 10){
        return "Small";
    }else if(n < 15) {
        return "Medium";
    }else if(n < 20) {
        return "Large";
    }else  {//if (n > 20)
        return "Huge";
    }
}
testSize(6);

// GOlF CODE
var names = ["Hole-in-one!", "Birde", "Par", "Bogey", "Double Bogey", "C"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }else if (strokes <= par - 2) {
        return names[1]
    }else if (strokes == par - 1) {
        return names[2]
    }else if (strokes == par) {
        return names[3]
    }else if (strokes == par + 1) {
        return names[4]
    }else if (strokes == par + 2) {
        return names[5]
    }else if (strokes >= par + 3) {
        return names[6]
    }
}
golfScore(5, 4);

// Switch Statements
function caseInSwitch(v) {
    var answer = "";
    switch (v) {
        case 1:
            answer = "alpha";
        break;
        case 2:
            answer = "beta";
        break;
        case 3:
            answer = "gamma";
        break;
        case 4:
            answer = "delta";
        break;
    }
    return answer;
}
caseInSwitch(1);

// switch OF Stuff
function switchOfStuff(v) {
    var answer = "";
    switch (v) {
        case "a":
            answer = "apple";
        break;
        case "b":
            answer = "bird";
        break;
        case "c":
            answer = "cat";
        break;
        default:
            answer = "stuff";
        break;
    }
    return answer;
}
// change this value to test
console.log(switchOfStuff("a"));

// Multiple Indentical Options in Switch Statements
function sequentialSizes(v) {
    var answer = "";
    switch(v){
     case 1:
     case 2:
     case 3:
        answer = "Low";
        break;
     case 4:
     case 5:
     case 6:
        answer = "Medium";
        break;
     case 7:
     case 8:
     case 9:
        answer = "High";
        break;
     default:
        answer = "Too High";  
    }
    return answer;
}
// console.log(sequentialSizes(5));

// Replacing If Else Chains with Switch
function chainToSwitch(v) {
    var answer = "";
    // Only change code below
    switch(v){
        case "bob":
        answer = "Marley";
        break;
        case 42:   
        answer = "The Answer";
         break;
        case 1:  
        answer = "The is no #1";
         break;
        case 99:  
        answer = "Missed me by this much!";
        break;
        case 7:  
        answer = "Ate Nine";
        break;
    }
    return answer;
}
chainToSwitch(7);

// Returning Boolean Values From Functions
function isLess (a,b) {
    //fix this code
    return a < b;
}
//Change these values to test
isLess(10, 15);

// Returning Early Pattern from Functions
function abTest(a, b) {
    // Only change code below this Line
    if(a < 0 || b < 0){
        return undefined;
    }
    
    //Only Change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));    
}
console.log(abTest(2,2));

// Counting Cards

function cc(card) {
var count = 0;
switch (card) {
    case 2: break;
    case 3:
    case 4:
    case 5:
    case 6:
    count++; 
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
}
    var holdbet = 'Hold';
    if(count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;

}
cc("k");
console.log(cc("J"));

/**Build JavaScript Objects */

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
// only change code below this line..

var myDog = {
    "name": "Camper",
    "legs": 3,
    "tails": 2,
    "friends": [""]    
};

//  Acessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "Jersey",
    "shoes": "cleats"
};

//Only chage code below this line
var hatValue = testObj.hat; // change this line
var shirtValue = testObj.shirt; //Change this Line

//Acessing Object Properties with Bracket Notation
testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

//Only change code below this line
var entreeValue = testObj["an entree"]; // Change this line
var entreeValue = testObj["the drink"]; // Change this line
// Acessing Object Properties with Variables
var testObj = {
    12: "Namadt",
    16: "Montana",
    19: "Unitas",
};

// Only Change code Below this line

var playerNumber = 16;
var Player = testObj[playerNumber];

console.log(Player);


// Updating Object Properties
//accessing ourDog.name
console.log();
myDog.friends = ["freeCodeCamp Campers"];
ourDog.name = "Happy Camper";
myDog.name = "Happy coder";

// Delete Properties From an Object
 delete myDog.tails;
 
 // Using Objects for LooKups
 function phoneticLookup(v) {
     var r = "";
     // Only change code below this line
     var lookup = {
         "alpha": "adams",
         "bravo": "Boston",
         "charlie": "Chicago",
         "echo":"Easy",
         "foxtrot":"Frank",
     };
     /*switch(v) {
         case "Alpha": r="Adams";break;
         case "Bravo": r="Boston";break;
         case "charlie": r="Chicago";break;
         case "delta": r="Denver";break;
         case "echo": r="Easy";break;
         case "foxtrot": r="Frank"; break;
     }*/
     r = lookup[v]
     return r;
 }
 console.log(phoneticLookup("echo"));

 // Testing Objects for Properties 
 //setup 
 var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // your code Here
    if (myObj.hasOwnProperty(checkProp)){
       return myObj[checkProp];
    }else {
        return "Not Found";
    }
    return "Change Me!";
}
// test your code by modifying these values
console.log(checkObj("gift"));

// // Manipulating Complex Objects
// var myMusic = [
//    {
//        "artist": "Billy Joel",
//        "title": "piano Man",
//        "release_year": 1973,
//        "formats": [
//            "CD",
//            "8T",
//            "LP"
//        ],
//        "gold":true
//    }, 
//    {
//    // add record here
//     "artist": "Beau Carnes",
//        "title": "Careal Man",
//        "release_year": 2003,
//        "formats": [
//            "YouTube video",
//            "8T",
//            "LP"
//        ],
//        "gold":true
//  },  
// ];

// // Setup
// var myStorage = {
//  "car":{
//      "inside": {
//          "glove box": "maps",
//          "passenger seat": "crumbs" 
//      },//inside
//      "outside":{
//          "trunk": "jack"
//      }//outside
//  }//car  
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];// acessing inside
// //console.log(gloveBoxContents);

// // Accessing Nested Arrays
// //Setup
// var myPlants = [
//    {
//        type: "flowers",
//        list: [
//            "rose",
//            "tulip",
//            "dandelion"
//        ]
//    },
//    {
//        type: "trees",
//        list: [
//            "fir",
//            "pine",
//            "birch"
//        ]
//    },
// ];

// //Only Change code below this line

// var secondTree = myPlants[1].list[0]; //accessing 2 index[1]--"trees"
// console.log(secondTree);

// // Record Collection 
// var collection = {
//    "2548":{
//        "album": "Slippery When Wet",
//        "artist": "Bon Jovi",
//        "tracks": [
//            "Let It  Rock",
//            "You Give Love a Bad Name"
//        ]
//    },
//    "2568":{
//        "album": "1999",
//        "artist": "Price",
//        "tracks": [
//            "1999",
//            "Little Red Corvette"
//        ]
//    },
//    "1245":{
//      //  "album": "",
//        "artist": "Robert Palmer",
//        "tracks": [ ]
//    },
//    "5439":{
//        "album": "ABBA Gold",
//        //"artist": "",
//        //"tracks": []
//    },
// };
// // Keep a copy of the collection for tests 
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // only change code below this line
// function updateRecords(id, prop, value) {
//    if(value === ""){
//        delete collection[id][prop];// delete if our value is empty string
//    }else if(prop === "tracks") {
//        //if tracks is empty, will be create
//        collection[id][prop] = collection[id][prop] || [];
//        collection[id][prop].push(value);
//    }else{//if isn't value blank and property isn't track
//        //just set the property to equal the value 
//        collection[id][prop] = value;
//    }
// //
// return collection;   
// }

// // Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"))