/*
Mark Barber
WPF 1408 Section 02
Expressions
10-09-2014
 */

// "What sized box truck do I need for my customer?"
// My customer delivers commercial generators and needs a box truck large enough for his deliveries.

// Define variables
var w = prompt("Enter Width of Generator")
var h = prompt("Enter Height of Generator")
var l = prompt("Enter Length of Generator")

// Define Equation as Volume = w x h x l
v = w * h * l

if (volume > 500)
	alert("Select the large box truck.");
	
	else
		if (volume < 500)
		alert("Select the small box truck.");
		


