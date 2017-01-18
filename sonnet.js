// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet").textContent;
console.log("sonnet:", sonnet);


//Find location of the word orphans in the sonnet div
var orphanSearch = sonnet.search("orphans");
console.log("orphans", orphanSearch);


//Find character length of sonnet div
var sonnetChar = sonnet.length;
console.log("This sonnet is " + sonnet.length + " characters long.");


// Replace winter with yuletide
var newString = sonnet.replace("winter", "yuletide");
console.log(sonnet.replace("winter", "yuletide"));


//Replace all occurrences of the string "the" with "a large"
var replaceAll = sonnet.replace(/the /gi, "a large ");
console.log("replaceAll:", replaceAll);


// Set the content of the sonnet div with the new string
var newDiv = document.getElementById("replaceAll");
// console.log("replaceAll:", replaceAll);---works!
document.getElementById("sonnet").innerHTML = replaceAll;