/* This function does the following:
    - Run when the "Check Answers" button with the id "fillInBlankCheck" is pushed.
    - Check the user's input from each field against an answer.
    - Output whether the answer is right or wrong.
*/

function checkFillInBlank () {
    const fillInBlank1 = document.getElementById("practiceProblem1").value;
    const fillInBlank2 = document.getElementById("practiceProblem2").value;
    const fillInBlank3 = document.getElementById("practiceProblem3").value;
    const explanationContainer = document.getElementById("practiceProblemExplanation1");
    const Fib1Wrong = document.createTextNode("No. 1: Incorrect. 'I' must be used with the be-verb 'am'.");
    const Fib2Wrong = document.createTextNode("No. 2: Incorrect. The verb form that must be used here is 'is'.");
    const Fib3Wrong = document.createTextNode("No. 3: Incorrect. The verb form that must be used here is 'are'.");
    const Fib1Right = document.createTextNode("No. 1: Correct! Well done!");
    const Fib2Right = document.createTextNode("No. 2: Correct! Well done!");
    const Fib3Right = document.createTextNode("No. 3: Correct! Well done!");

        if (fillInBlank1 === "I" ) {
            
        }

}
