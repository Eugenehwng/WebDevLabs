
let x = 5;
let y = 7;
let z = x + y;
console.log(z); 

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C); 

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log("SumNPrint result:", x3);
}

SumNPrint(x, y);  
SumNPrint(A, B);  


if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");  
}

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Found Banana in array: " + arr[i]);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findTheBananaForEach(arr) {
//     arr.forEach(function (item) {
//         if (item === "Banana") {
//             alert("Found Banana (forEach) in array: " + item);
//         }
//     });
// }

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);

// function greetingFunc() {
//     let d = new Date();
//     let h = d.getHours();
//     let greeting = "";

//     if (h >= 20 || h < 5) {
//         greeting = "Good night";
//     } else if (h < 12) {
//         greeting = "Good morning";
//     } else if (h < 18) {
//         greeting = "Good afternoon";
//     } else if (h < 20) {
//         greeting = "Good evening";
//     }
//     console.log("Greeting:", greeting);

//     let greetingElement = document.getElementById("greeting");
//     if (greetingElement) {
//         greetingElement.innerHTML = greeting + ", I am Eugene Hwang";
//     }
// }
// if (window.location.href.indexOf("index.html") !== -1 || window.location.pathname === "/") {
//     greetingFunc();
// }


// Function to display a time-based greeting
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)
    var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

    // Check the time and update the greeting accordingly
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is Eugene.";  // Morning greeting (5 AM - 11:59 AM)
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is Eugene.";  // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is Eugene.";  // Evening greeting (6 PM - 7:59 PM)
    } else {  
        E.innerHTML = "Good night, my name is Eugene.";  // Night greeting (8 PM - 4:59 AM)
    } 
}

// Get the current page URL
var L = window.location.href;
console.log(L);  // Log the full URL to the console for debugging

// Check if the current page is "index.html" before running the greeting function
if (L.includes("index.html")) {  
   greetingFunc();  // Call the function to update the greeting
}

// Get the Year for the Footer
function addYear() {
    var d = new Date(); // Creates a new Date object
    var y = d.getFullYear(); // Extracts the current year (e.g., 2025)
    var E = document.getElementById("copyYear"); // Finds the element with ID "copyYear"
    E.innerHTML+=y;  // Appends the year to the existing content
 } 

 // Click to see button
 function showList() {
    document.getElementById("FavList").style.display = "block"; // Makes the list visible
    document.getElementById("SeeMoreBTN").style.display = "none"; // Hides the "See More" button
 } 

  // Read more and less buttons

  // When the "Read Less" button is clicked
$("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
  // When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

// Form validation
function validate() {
    // Get the input fields and validation message element by their IDs
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("text");
    var msg = document.getElementById("ValidateMsg"); // Element to display validation message
    // Check if any of the fields are invalid using checkValidity()
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        // If any field is invalid, display an error message
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 } 

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Error retrieving advice.";
            console.error(error);
        });
}