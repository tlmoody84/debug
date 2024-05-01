// Question 3: Why does the counter start at NaN?
// NaN is not a number and in this case, the value is not initialized
let count = parseInt(document.getElementById('counter-value').innerText);

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
// It first goes to NaN and after it is reset, when clicked again, it starts at 1
incrementButton.addEventListener('click', function() {
  debugger
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
document.getElementById('count-value').innerText = count;
decrementButton.addEventListener('click', function() {
    count--;
    
});

// Question 6: Why does the reset function set the count to '0' as a string?
resetButton.addEventListener('click', function() {
    count = '0';
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
// Question 8: What is the scope of the count variable in DevTools?

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// Question 10: Use the Console to track errors. Are there any errors being thrown?
