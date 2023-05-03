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
};

function checkTranslation1() {
    const translation1 = document.getElementById("practiceProblem4").value;
    const trans1Right = document.createTextNode("Well done! That's a natural-sounding sentence!");
    const trans1Wrong = document.createTextNode("That's not quite what I would use. Here are the answers I was thinking of: 'I am scared' or 'I am afraid'. Be sure to check your spelling and punctuation!");
    const trans1NoAns = document.createTextNode("You did not submit answer.");
    const translationAnsContainer = document.getElementById("translationExplanation1");
    const answerContainer1 = document.createElement("span");
    answerContainer1.setAttribute("id", answerContainer1);
    answerContainer1.classList.add("answerContainer1");

    if (document.getElementsByClassName("answerContainer1").length > 0) {
        const removeContainer1 = document.getElementById(answerContainer1);
        removeContainer1.remove();
    } 


    if (translation1 === "I am scared." || translation1 === "I am afraid.") {
        translationAnsContainer.appendChild(answerContainer1).appendChild(trans1Right);
    } else if (translation1 == "") {
        translationAnsContainer.appendChild(answerContainer1).appendChild(trans1NoAns);
    } else if (translation1 != "I am scared." || "I am afraid.") {
        translationAnsContainer.appendChild(answerContainer1).appendChild(trans1Wrong);
    } 
};

function checkTranslation2() {
    const translation2 = document.getElementById("practiceProblem5").value;
    const trans2Right = document.createTextNode("Well done! That's a natural-sounding sentence!");
    const trans2Wrong = document.createTextNode("That's not quite what I would use. Here is the answer I was thinking of: 'This is Gary. He is strict.'. Be sure to check your spelling and punctuation!");
    const trans2NoAns = document.createTextNode("You did not submit answer.");
    const translationAnsContainer = document.getElementById("translationExplanation2");
    const answerContainer2 = document.createElement("span");
    answerContainer2.setAttribute("id", answerContainer2);
    answerContainer2.classList.add("answerContainer2");

    if (document.getElementsByClassName("answerContainer2").length > 0) {
        const removeContainer2 = document.getElementById(answerContainer2);
        removeContainer2.remove();
    } 


    if (translation2 === "This is Gary. He is strict." ) {
        translationAnsContainer.appendChild(answerContainer2).appendChild(trans2Right);
    } else if (translation2 == "") {
        translationAnsContainer.appendChild(answerContainer2).appendChild(trans2NoAns);
    } else if (translation2 != "This is Gary. He is strict.") {
        translationAnsContainer.appendChild(answerContainer2).appendChild(trans2Wrong);
    } 
};
/*
function checkTranslation3() {
    const translation3 = document.getElementById("practiceProblem6").value;
    const trans3Right = document.createTextNode("Well done! That's a natural-sounding sentence!");
    const trans3Wrong = document.createTextNode("That's not quite what I would use. Here is the answer I was thinking of: 'They are cool.' Be sure to check your spelling and punctuation!");
    const trans3NoAns = document.createTextNode("You did not submit answer.");
    const translationAnsContainer = document.getElementById("translationExplanation3");
    const answerContainer3 = document.createElement("span");
    answerContainer3.setAttribute("id", answerContainer3);
    answerContainer3.classList.add("answerContainer3");

    if (document.getElementsByClassName("answerContainer3").length > 0) {
        const removeContainer3 = document.getElementById(answerContainer3);
        removeContainer3.remove();
    } 


    if (translation3 === "They are cool." ) {
        translationAnsContainer.appendChild(answerContainer3).appendChild(trans3Right);
    } else if (translation3 == "") {
        translationAnsContainer.appendChild(answerContainer3).appendChild(trans3NoAns);
    } else if (translation3 != "They are cool.") {
        translationAnsContainer.appendChild(answerContainer3).appendChild(trans3Wrong);
    } 
};*/