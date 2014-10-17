
 /*
Mark Barber
WPF 1408 Section 02
Conditionals WK3
10-16-2014
 */


 // "Should I wear my jacket in Canada today?"

 <script type="text.javascript">

 // Name variables & prompt for known variable input

 // Name Degrees in Celsius, defaulting to the 18 value
 var degCels = prompt("Enter Temperature in Celsius",18);

 // Name variable of Degrees Faherenheit
 var degFahren;

 // Name variable of Rain Chance, defaulting to 80% value
 var percRain = prompt("Enter Chance of Rain as a Percentage",80);



 // Label Equation for Calculation: F = (C x 9/5) + 32

 degFahren = (degCels * 9/5) + 32

 // I don't care what the temperature actually is, just if I should wear my jacket or not, and I know I am comfortable at 60+ degrees Fahrenheit

 //Add if/then statement and appropriate alert text

 // Determine the mathematical equation and parameters to alert to wear a jacket

 if (degFahren < 60) {
     alert("Wear your jacket today.");
     }

 // or alert to not wear a jacket

 else {
     alert("Do not wear your jacket today.");
     }

 // Use Rain Chance variable with ternary operator

 var percRain = "Wear your galoshes:" + ((now.getpercRain() > 80) ? " No!" : " Yes!");

 // Now I will know if I should wear a jacket or not, AND if I should wear my galoshes or not!