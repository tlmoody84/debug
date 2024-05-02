// Question 3: Why does the counter start at NaN?
// NaN is not a number and in this case, the value is not initialized
let count = parseInt(document.getElementById('counter-value').innerText= 0);

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
// It first goes to NaN and after it is reset, when clicked again, it starts at 0 and goes up
incrementButton.addEventListener('click', function() {
  debugger
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
// The value is not correct and it should be counter-value
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
//  It retrieves the element and sets its innerText property to the current value of the count
// it is set as a string by being in quotation marks
resetButton.addEventListener('click', function() {
    count = 0;
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
// There is an option in the drop down box right after Hit Count for :Log Message:, and that message shows
//  up in the debug console with a number next to it indicating how many times the log 
//  point was hit. Set the breakpoint on the event listener
// Question 8: What is the scope of the count variable in DevTools?
// 0
// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// yes time is 3ms
// Question 10: Use the Console to track errors. Are there any errors being thrown?
// no