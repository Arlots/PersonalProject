/* This function does the following:
    - Run when the "Check Answers" button with the id "fillInBlankCheck" is pushed.
    - Check the user's input from each field against an answer.
    - Output whether the answer is right or wrong.
*/

function checkFillInBlank() {
    const fillInBlank1 = document.getElementById("practiceProblem1").value;
    const fillInBlank2 = document.getElementById("practiceProblem2").value;
    const fillInBlank3 = document.getElementById("practiceProblem3").value;
    const explanationContainer = document.getElementById("practiceProblemExplanation1");
    const FibSpan1 = document.createElement('span');
    const FibSpan2 = document.createElement('span');
    const FibSpan3 = document.createElement('span');
    FibSpan1.classList.add('explanationSpan');
    FibSpan2.classList.add('explanationSpan');
    FibSpan3.classList.add('explanationSpan');
    FibSpan1.setAttribute("id", FibSpan1);
    FibSpan2.setAttribute("id", FibSpan2);
    FibSpan3.setAttribute("id", FibSpan1);
    const Fib1Wrong = document.createTextNode("No. 1: Incorrect. 'I' must be used with the be-verb 'am', and it is always capitalized.");
    const Fib2Wrong = document.createTextNode("No. 2: Incorrect. The verb form that must be used here is 'is'. It must be lower-case.");
    const Fib3Wrong = document.createTextNode("No. 3: Incorrect. The verb form that must be used here is 'are'. It must be lower-case.");
    const Fib1Right = document.createTextNode("No. 1: Correct! Well done!");
    const Fib2Right = document.createTextNode("No. 2: Correct! Well done!");
    const Fib3Right = document.createTextNode("No. 3: Correct! Well done!");
    const FibNoAns1 = document.createTextNode("No. 1: Answer not submitted.")
    const FibNoAns2 = document.createTextNode("No. 2: Answer not submitted.")
    const FibNoAns3 = document.createTextNode("No. 3: Answer not submitted.")

    if (document.getElementsByClassName('explanationSpan').length > 0) {
       const removeSpan1 = document.getElementById(FibSpan1);
       removeSpan1.remove()
    };

    if (document.getElementsByClassName('explanationSpan').length > 0) {
        const removeSpan2 = document.getElementById(FibSpan2);
        removeSpan2.remove()
     };

     if (document.getElementsByClassName('explanationSpan').length > 0) {
        const removeSpan3 = document.getElementById(FibSpan3);
        removeSpan3.remove();
     };

    if (fillInBlank1 === "I") {
        explanationContainer.appendChild(FibSpan1).appendChild(Fib1Right);
    } else if (fillInBlank1 == "") {
        explanationContainer.appendChild(FibSpan1).appendChild(FibNoAns1);
    } else if (fillInBlank1 != "I") {
        explanationContainer.appendChild(FibSpan1).appendChild(Fib1Wrong);
    };

    if (fillInBlank2 === "is") {
        explanationContainer.appendChild(FibSpan2).appendChild(Fib2Right);
    } else if (fillInBlank2 == "") {
        explanationContainer.appendChild(FibSpan2).appendChild(FibNoAns2);
    } else if (fillInBlank2 != "is") {
        explanationContainer.appendChild(FibSpan2).appendChild(Fib2Wrong);
    };

    if (fillInBlank3 === "are") {
        explanationContainer.appendChild(FibSpan3).appendChild(Fib3Right);
    } else if (fillInBlank3 == "") {
        explanationContainer.appendChild(FibSpan3).appendChild(FibNoAns3);
    } else if (fillInBlank3 != "are") {
        explanationContainer.appendChild(FibSpan3).appendChild(Fib3Wrong);
    };
}

