# Task 1 - color switcher
* Write a script that, after clicking the "Start" button, changes the <body> background color once a second to a random value using the inline style. When clicking on the "Stop" button, background color change must stop.
# Task 2 - countdown timer 
* Write a timer script that counts down to a specific date. Such a timer can be used in blogs and online stores, event-logging pages, during maintenance, etc. 
* Use the flatpickr library (https://flatpickr.js.org/ ) to allow cross-browser selection of the end date and time in a single UI element. 
 ## Date selection
 The onClose() method is called from the parameter object every time the interface element that creates flatpickr is closed. It should be used to handle the date selected by the user. The selectedDates parameter is an array of the selected dates, so the first element is taken.

* If the user selects a date from the past, show the notification with the text "Please choose a date in the future".
* If the user has selected a valid date (in the future), the "Start" button becomes active.
* The "Start" button must be inactive until the user has selected a date in the future.
* When you click the "Start" button, the countdown to the selected date starts from the time of clicking.
 # Task 3 - promise generator
  * Write a script that, when submitting the form, calls the createPromise(position, delay) function as many times as you entered in the amount field. On each call, pass it the number of the promise to be created (position) and the delay given the first delay (delay) and step (step) entered by the user.
  * Supplement the code of the createPromise function so that it returns one promise that will be fulfilled or rejected after delay time. The value of the promise must be an object containing the position and delay properties with the values of these parameters. Use the initial function code to choose whether to fulfill or reject the promise.
