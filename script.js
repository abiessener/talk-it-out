/*
1. Start with the number 42 and set that equal to the variable `majorKey`

2. Create conditional logic to check if `majorKey` is greater than or equal to 53
2-1. If true, add 42 to `majorKey`
2-2. If false, subtract 13 from `majorKey`

3. Add a string with a value of 11 to `majorKey`

4. Create an array named `keyChars`, then loop through `majorKey` using the `charAt` method and set `keyChars[i]` to each value

5. Remove the first and last values from `keyChars`

6. Create a new variable. Loop **backwards** through `keyChars` and store each value into the new variable, combining each of the values of `keyChars`

7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.

******* SWITCH PROGRAMMERS *******

8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`

9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
If neither of these are true, set `majorKey` to 2.

10. Create a while loop that counts down from 10 and increments `majorKey` by 1.

11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
is more than one character in the string. Return `val` and set `majorKey` to the returned value.

12. Call the function.

13. Console log `majorKey`.

14. Create an index.html file, link in this JavaScript file. Load in the browser and check the value from Step 13.

15. Your answer should be a string value that equals 7. Is that what you got?
*/

var majorKey = 42;

if (majorKey > 53) {
  majorKey += 42;
} else {
  majorKey -= 13;
}

majorKey += '11';

var keyChars = [];

for (var i = 0; i < majorKey.length; i++) {
  keyChars[i] = majorKey.charAt(i);
}

keyChars.pop();
keyChars.shift();

var reverse = '';

for (var i = keyChars.length - 1; i >= 0; i--) {
  reverse += keyChars[i];
}

majorKey = parseInt(majorKey);
reverse = parseInt(reverse);

// switched programmers

majorKey += reverse;

if (majorKey < 60) {
  majorKey = 14;
} else if (majorKey === 2930) {
  majorKey = 27;
} else {
  majorKey = 2;
}

i = 10;
while (i > 0) {
  majorKey++;
  i--;
}

function convertVal(val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.substr(1);
  }
  // majorKey = val;
  return val;
}

majorKey = convertVal(majorKey);

console.log("majorKey at 96: ", majorKey);

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("output").innerHTML = 'majorKey is equal to ' + majorKey;
// });

$(document).ready(function() {
  $('#displayButton').click(displayOutput);
});

function displayOutput() {
  $('#output1').css('margin', 'auto');
  $('#output1').css('background', '#fc78a3');
  $('#output1').css('font-size', '10em');
  $('#output1').text('majorKey is equal to ').fadeIn('slow',displaySecondOutput);
}

function displaySecondOutput() {
  $('#output2').css('margin', 'auto');
  $('#output2').css('background', '#fc7aee');
  $('#output2').css('font-size', '30em');
  $('#output2').text(majorKey).fadeIn('slow');
}
