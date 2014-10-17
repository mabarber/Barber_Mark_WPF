
 /*
Mark Barber
WPF 1408 Section 02
Conditionals WK3
10-16-2014
 */

 // "What sized box truck do I need for my customer?"
 // My customer delivers commercial generators and needs a box truck large enough for his deliveries.

 // Define variables
 var w = prompt("Enter Width of Generator")
 var h = prompt("Enter Height of Generator")
 var l = prompt("Enter Length of Generator")

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