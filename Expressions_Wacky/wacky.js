 /*
Mark Barber
WPF 1408 Section 02
Expressions
10-09-2014
 */
 // "Should I wear my jacket in Canada today?"

 <script type="text.javascript">

 // Name variables and prompt for known variable input

 var degCels = prompt("Enter Temperature in Celsius",18);
 var degFahren;

 // Label Equation for Calculation: F = (C x 9/5) + 32

 degFahren = (degCels * 9/5) + 32

 // I don't care what the temperature actually is, just if I should wear my jacket or not, and I know I am comfortable at 60+ degrees Fahrenheit
 //Add if/then statement and appropriate alert text

 if (degFahren < 60)
     alert("Wear your jacket today.");

 else {
     alert("Do not wear your jacket today.");
     }