
 /*
Mark Barber
WPF 1408 Section 02
Functions WK4
10-24-2014
 */


 // "Should I wear my jacket in Canada today?"

 // Now I want to further this functionality with getting the same information for a three day run, including jacket and galoshes.

 <script type="text.javascript">

 // Name variables & prompt for known variable input

 // Name Degrees in Celsius, defaulting to the 18 value, for the upcoming three days
 var degCels1 = prompt("Enter Temperature in Celsius for Day 1",18);
 var degCels2 = prompt("Enter Temperature in Celsius for Day 2",18);   //Added a day
 var degCels3 = prompt("Enter Temperature in Celsius for Day 3",18);   //Added another day

 // Name variable of Degrees Faherenheit
 var degFahren1;
 var degFahren2;  //Added a day
 var degFahren3;  //Added another day

 // Name variable of Rain Chance, defaulting to 80% value, for the upcoming three days
 var percRain1 = prompt("Enter Chance of Rain as a Percentage for Day 1",80);
 var percRain2 = prompt("Enter Chance of Rain as a Percentage for Day 2",80);   //Added a day
 var percRain3 = prompt("Enter Chance of Rain as a Percentage for Day 3",80);   //Added another day


 // Label Equation for Calculation: F = (C x 9/5) + 32

 degFahren = (degCels * 9/5) + 32


 // Creating my first function for wearing a jacket using temperature variables

 function myForecast (degCels1, degCels2, degCels3)	{

//apply the variables above to the degFahren calculation for that day

     var degFahren = ((var * 9/5) + 32);

     // Determine the mathematical equation and parameters to alert to wear a jacket

     if (degFahren < 60) {    //what is too cold?  Less than sixty degrees
     alert("Wear your jacket.");  //alert user to wear a jacket on that day
     }

     // or alert to not wear a jacket

     else {   //what is not too cold?  higher than sixty degrees
     alert("Do not wear your jacket.");  //alert user to not wear a jacket
     }

// I don't care what the temperature actually is, just if I should wear my jacket or not, and I know I am comfortable at 60+ degrees Fahrenheit

     return var result  //alert the user of the result
     }



 // Creating my second function for wearing galoshes using rain percentage variables

 function myForecastrain (percRain1, percRain2, percRain3)	{

//apply the variables above to the figure out if I should wear galoshes that day

     var percRain = "Wear your galoshes:" + ((now.getpercRain() > 80) ? " No!" : " Yes!");


     return var result  //alert the user of the result
     }

 //Viola!