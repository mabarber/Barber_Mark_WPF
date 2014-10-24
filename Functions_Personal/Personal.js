
 /*
Mark Barber
WPF 1408 Section 02
Functions WK4
10-24-2014
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


 //But wait, what if three pubs are all lined up, which one would give me the best value for my cash?

 // Name Bar 1 variables
 var scotch1 = prompt("Enter Cost of Scotch at Bar 1")
 var beer1 = prompt("Enter Cost of Beer at Bar 1")
 var tax1 = prompt("Enter County Tax Rate in Decimal Form at Bar 1")

 // Name Bar 2 variables
 var scotch2 = prompt("Enter Cost of Scotch at Bar 2")
 var beer2 = prompt("Enter Cost of Beer at Bar 2")
 var tax2 = prompt("Enter County Tax Rate in Decimal Form at Bar 2")

 // Name Bar 3 variables
 var scotch3 = prompt("Enter Cost of Scotch at Bar 3")
 var beer3 = prompt("Enter Cost of Beer at Bar 3")
 var tax3 = prompt("Enter County Tax Rate in Decimal Form at Bar 3")


 // Creating my first drinking function for scotch using the scotch variables for each bar

 function myDrink (scotch1, scotch2, scotch3)	{

//apply the variables above to figure out which Bar can I have a scotch at

     var myScotch = "Can I have a Scotch at this bar:" + ((now.getScotchCost() > cash) ? " No!" : " Yes!");


     return var result  //alert the user of the result for that bar
 }


 // Creating my second drinking function for beer using the beer variables for each bar

 function myBeer (beer1, beer2, beer3)	{

//apply the variables above to figure out which Bar can I have a beer at

     var myBeer = "Can I have a Beer at this bar:" + ((now.getbeerCost() > cash) ? " No!" : " Yes!");


     return var result  //alert the user of the result for that bar
 }



 //Then I can break down further as to what I can have at each particular bar.




 // If cash is more than the cost of the scotch, alert I may have a scotch
 if (this.getscotchCost("You have more money than the value of the scotch").value <= 'cash') {

// Alert that I may have a scotch
     alert("You may have a scotch now.");


// If cash is less than the cost of scotch, but more than the cost of beer, I may have a beer instead
 } else if (this.getbeerCost("You have less many than the value of the scotch, but enough for a beer").value <= 'cash') {

// Alert that I may have a beer
     alert("You may have a beer now.");


// If cash is less than scotch and beer, I need to just go home and go to bed for sure
 } else if (this.getbeerCost("You have less money than the value of scotch or beer, go home and go to bed").value >= 'cash') {

// Alert that I don't have enough money for scotch or beer
     alert("You do not have enough money to have any fun, go home and go to bed.");
 }