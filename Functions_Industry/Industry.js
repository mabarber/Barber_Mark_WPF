
 /*
Mark Barber
WPF 1408 Section 02
Functions WK4
10-24-2014
 */

 // "What sized box truck do I need for my customer?"
 // My customer delivers commercial generators and needs a box truck large enough for his deliveries.

 // Define variables
 var w = prompt("Enter Width of Generator")
 var h = prompt("Enter Height of Generator")
 var l = prompt("Enter Length of Generator")

 //define set of truck values

 var smallTruck = 100000
 var largetruck = 200000

 // Define how much my customer can spend

 var cash = prompt("Enter how much the customer can spend.")


 //before I go into doing all this work, I need to know if my customer can even afford these vehicles, which we only accept cash upfront

 //Define cash function to buy a truck, at the very least they must have $100,000 to even consider putting the effort into

 function goBuy (var truck value) 	{   //Define variables and value
     var cash < 100000				//Define cash on hand
     alert ("Customer cannot afford either truck")  //if less than the minimal truck amount purchase, alert user that customer cannot afford a truck at all and to not proceed



// Define Equation as Volume = w x h x l
     v = w * h * l

// Take the volume value and determine which truck is right for the job


// If volume is less than 500, alert to use the small box truck
     if (this.getv("Volume of load").value <= '500') {

// Alert to use the small box truck
         alert("Select the small box truck.");

// If volume is more than 500, but less than 1500, alert to use the small box truck
     } else if (this.getv("Volume of load").value <= '1500') {

// Alert to use the large box truck
         alert("Select the large box truck.");

// If volume is more than 1500, alert you do not have a truck big enough for the job
     } else if (this.getv("Volume of load").value >= '1501') {

// Alert that the size truck needed is unavailable
         alert("No truck large enough available.");

     }