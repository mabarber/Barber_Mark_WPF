
 /*
Mark Barber
WPF 1408 Section 02
Conditionals WK3
10-16-2014
 */
 // "Can I have a beer?"
 // I need a calculator that will let me know if I have enough cash to buy a scotch at a random pub,
 // And if I don't have enough money for a scotch, do I have enough money for a beer,
 // And if I don't have enough money for either, I need to be told to go home and go to bed.

 // Define variables
 var scotch = prompt("Enter Cost of Scotch")
 var beer = prompt("Enter Cost of Beer")
 var tax = prompt("Enter County Tax Rate in Decimal Form")
 var tip = prompt("Enter Tip Amount (don't be cheap, over $5)")
 var cash = prompt("Enter amount of cash you have available.")

 // Define Equations to discover true cost

 // scotch + (scotch x tax) + tip
 // beer + (beer x tax) + tip

 // Find the cost of the scotch
 scotchCost = scotch + (scotch * tax) + tip

 // Find the cost of the beer
 beerCost = beer + (beer * tax) + tip


 // Now tell me what I can do!


 // If cash is more than the cost of the scotch, alert I may have a scotch
 if (this.getscotchCost("You have more money than the value of the scotch").value <= 'cash') {

// Alert that I may have a scotch
     alert("You may have a scotch now.");


// If cash is less than the cost of scotch, but more than the cost of beer, I may have a beer instead
 } else if (this.getbeerCost("You have less many than the value of the scotch, but enough for a beer").value <= 'cash') {

// Alert that I may have a beer
     alert("You may have a beer now.");


// If volume is more than 1500, alert you do not have a truck big enough for the job
 } else if (this.getbeerCost("You have less money than the value of scotch or beer, go home and go to bed").value >= 'cash') {

// Alert that I don't have enough money for scotch or beer
     alert("You do not have enough money to have any fun, go home and go to bed.");
 }



