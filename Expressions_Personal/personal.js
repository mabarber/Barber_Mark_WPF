/*
 Mark Barber
 WPF 1408 Section 02
 Expressions
 10-09-2014
 */


// "Can I have a beer?"
// I need a calculator that will let me know if I have enough cash to buy a beer at a random pub.

// Define variables
var beer = prompt("Enter Cost of Beer")
var tax = prompt("Enter County Tax Rate in Decimal Form")
var tip = prompt("Enter Tip Amount (don't be cheap, over $5)")
var cash = prompt("Enter amount of cash you have available.")

// Define Equation 
// beer + (beer x tax) + tip

cost = beer + (beer * tax) + tip

if (cost > cash)
	alert("No, you cannot have a beer.");
	
	else
		if (cost < cash)
		alert("yes, you may have a beer");
		


