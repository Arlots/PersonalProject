//This function needs to active when user pushes the "reload" button and swap the reading text to match the chosen difficulty.

function readingSwap(){
   const selectedLevel = document.getElementById("levelSelect");
   const readingLine1 = document.getElementById("readingLine1");
   const readingLine2 = document.getElementById("readingLine2");
   const readingLine3 = document.getElementById("readingLine3");
   const readingLine4 = document.getElementById("readingLine4");
   const readingAudio = document.getElementById("audioPlayer");

   const level1Line1 = "This is Steven. Steven is forty-two. Steven is a doctor. Steven is smart. Steven is clever. He is a husband. His wife is Sherry."
   const level1Line2 = "Sherry is thirty-nine. Sherry is a teacher. She is friendly. She is fun. "
   const level1Line3 = "Sherry and Steven are a couple. They are also parents. "
   const level1Line4 = "Their children are Samantha and Seth. Seth is a sixth grader. Samantha is a junior high school student."

   const level2Line1 = "This is Steven. Steven is forty-two. Steven is a cardiologist. Steven is intelligent. Steven is clever. He is a husband. His wife is Sherry."
   const level2Line2 = "Sherry is thirty-nine. Sherry is a teacher. She is bubbly. She is outgoing. "
   const level2Line3 = "Sherry and Steven are a couple. They are also parents. "
   const level2Line4 = "Their children are Samantha and Seth. Seth is a sixth grader. Samantha is a junior high school student. They are rowdy. "

   const readingQuestion1 = document.getElementById("readingQuestion1");
   const readingQuestion2 = document.getElementById("readingQuestion2");
   const readingQuestion3 = document.getElementById("readingQuestion3");

   const questionLevel1_1 = "1.	ステーブンの妻の名前はなんですか？";
   const questionLevel2_1 = "1.	Cardiologistはなんですか？";

   const readingComp1A = document.getElementById("readingComp1A");
   const readingComp1B = document.getElementById("readingComp1B");
   const readingComp1C = document.getElementById("readingComp1C");
   const readingComp1D = document.getElementById("readingComp1D");

   const answerLabel1A = document.getElementById("answerLabel1A");
   const answerLabel1B = document.getElementById("answerLabel1B");
   const answerLabel1C = document.getElementById("answerLabel1C");
   const answerLabel1D = document.getElementById("answerLabel1D");

   const questionLevel1_1Choices = ["a. Seth", "b. Samantha", "c. Sherry", "d. Steven"];
   const questionLevel2_1Choices = ["a. 心臓専門医", "泌尿器科医", "目医者", "皮膚科医"];

   const questionLevel1_2 = "2.	Sethは何年生ですか？";
   const questionLevel2_2 = "2.	誰がbubblyという性格を持っているのですか？";

   const readingComp2A = document.getElementById("readingComp2A");
   const readingComp2B = document.getElementById("readingComp2B");
   const readingComp2C = document.getElementById("readingComp2C");
   const readingComp2D = document.getElementById("readingComp2D");

   const answerLabel2A = document.getElementById("answerLabel2A");
   const answerLabel2B = document.getElementById("answerLabel2B");
   const answerLabel2C = document.getElementById("answerLabel2C");
   const answerLabel2D = document.getElementById("answerLabel2D");

   const questionLevel1_2Choices = ["a. 5年生", "b. 6年生", "c. 2年生", "d. 4年生"];
   const questionLevel2_2Choices = ["a. Samantha", "b. Seth", "c. Steven", "d. Sherry"];


   const questionLevel1_3 = "3.	Sherryの職業はなんですか？";
   const questionLevel2_3 = "3.	StevenとSherryは何歳ですか？";

   const readingComp3A = document.getElementById("readingComp3A");
   const readingComp3B = document.getElementById("readingComp3B");
   const readingComp3C = document.getElementById("readingComp3C");
   const readingComp3D = document.getElementById("readingComp3D");

   const answerLabel3A = document.getElementById("answerLabel3A");
   const answerLabel3B = document.getElementById("answerLabel3B");
   const answerLabel3C = document.getElementById("answerLabel3C");
   const answerLabel3D = document.getElementById("answerLabel3D");

   const questionLevel1_3Choices = ["a. doctor", "b. teacher", "c. bakery", "d. housewife"];
   const questionLevel2_3Choices = ["a. 42と39", "b. 39と40", "c. 32と49", "d. 44と39"];

   switch (selectedLevel.value) {
        case "Level1":
        default:
            readingLine1.innerText = level1Line1;
            readingLine2.innerText = level1Line2;
            readingLine3.innerText = level1Line3;
            readingLine4.innerText = level1Line4;
            readingAudio.setAttribute("src", "./BeVerbBeginnerRecoring_Level1.wav")

            readingQuestion1.innerText = questionLevel1_1;
            readingComp1A.setAttribute("value", "seth");
            answerLabel1A.innerText = questionLevel1_1Choices[0];
            readingComp1B.setAttribute("value", "samantha");
            answerLabel1B.innerText = questionLevel1_1Choices[1];
            readingComp1C.setAttribute("value", "sherry");
            answerLabel1C.innerText = questionLevel1_1Choices[2];
            readingComp1D.setAttribute("value", "steven");
            answerLabel1D.innerText = questionLevel1_1Choices[3];

            readingQuestion2.innerText = questionLevel1_2;
            readingComp2A.setAttribute("value", "fifth");
            answerLabel2A.innerText = questionLevel1_2Choices[0];
            readingComp2B.setAttribute("value", "sixth");
            answerLabel2B.innerText = questionLevel1_2Choices[1];
            readingComp2C.setAttribute("value", "second");
            answerLabel2C.innerText = questionLevel1_2Choices[2];
            readingComp2D.setAttribute("value", "fourth");
            answerLabel2D.innerText = questionLevel1_2Choices[3];

            readingQuestion3.innerText = questionLevel1_3;
            readingComp3A.setAttribute("value", "doctor");
            answerLabel3A.innerText = questionLevel1_3Choices[0];
            readingComp3B.setAttribute("value", "teacher");
            answerLabel3B.innerText = questionLevel1_3Choices[1];
            readingComp3C.setAttribute("value", "bakery");
            answerLabel3C.innerText = questionLevel1_3Choices[2];
            readingComp3D.setAttribute("value", "housewife");
            answerLabel3D.innerText = questionLevel1_3Choices[3];
            break;

        case "Level2":
            readingLine1.innerText = level2Line1;
            readingLine2.innerText = level2Line2;
            readingLine3.innerText = level2Line3;
            readingLine4.innerText = level2Line4;
            readingAudio.setAttribute("src", "./BeVerbBeginnerRecoring_Level2.wav")

            readingQuestion1.innerText = questionLevel2_1;
            readingComp1A.setAttribute("value", "cardiologist");
            answerLabel1A.innerText = questionLevel2_1Choices[0];
            readingComp1B.setAttribute("value", "urologist");
            answerLabel1B.innerText = questionLevel2_1Choices[1];
            readingComp1C.setAttribute("value", "eyedoctor");
            answerLabel1C.innerText = questionLevel2_1Choices[2];
            readingComp1D.setAttribute("value", "dermatologist");
            answerLabel1D.innerText = questionLevel2_1Choices[3];

            readingQuestion2.innerText = questionLevel2_2;
            readingComp2A.setAttribute("value", "samantha");
            answerLabel2A.innerText = questionLevel2_2Choices[0];
            readingComp2B.setAttribute("value", "seth");
            answerLabel2B.innerText = questionLevel2_2Choices[1];
            readingComp2C.setAttribute("value", "steven");
            answerLabel2C.innerText = questionLevel2_2Choices[2];
            readingComp2D.setAttribute("value", "sherry");
            answerLabel2D.innerText = questionLevel2_2Choices[3];

            readingQuestion3.innerText = questionLevel2_3;
            readingComp3A.setAttribute("value", "42_39");
            answerLabel3A.innerText = questionLevel2_3Choices[0];
            readingComp3B.setAttribute("value", "39_40");
            answerLabel3B.innerText = questionLevel2_3Choices[1];
            readingComp3C.setAttribute("value", "32_49");
            answerLabel3C.innerText = questionLevel2_3Choices[2];
            readingComp3D.setAttribute("value", "44_39");
            answerLabel3D.innerText = questionLevel2_3Choices[3];
            break;
   }



   const elements = document.getElementsByTagName("input");

   for (let i = 0; i < elements.length; i++) {
   if (elements[i].type == "radio") {
       elements[i].checked = false;
        }
    }

    const removeText1 = document.getElementById("readingQuestion1Tag");
   const removeText2 = document.getElementById("readingQuestion2Tag");
   const removeText3 = document.getElementById("readingQuestion3Tag");

   removeText1.innerText = "";
   removeText2.innerText = "";
   removeText3.innerText = "";
};

function loadDefaultReading() {
    const selectedLevel = document.getElementById("levelSelect");
    const readingLine1 = document.getElementById("readingLine1");
    const readingLine2 = document.getElementById("readingLine2");
    const readingLine3 = document.getElementById("readingLine3");
    const readingLine4 = document.getElementById("readingLine4");
    const readingAudio = document.getElementById("audioPlayer");
 
    const level1Line1 = "This is Steven. Steven is forty-two. Steven is a doctor. Steven is smart. Steven is clever. He is a husband. His wife is Sherry."
    const level1Line2 = "Sherry is thirty-nine. Sherry is a teacher. She is friendly. She is fun. "
    const level1Line3 = "Sherry and Steven are a couple. They are also parents. "
    const level1Line4 = "Their children are Samantha and Seth. Seth is a sixth grader. Samantha is a junior high school student."
 

    const readingQuestion1 = document.getElementById("readingQuestion1");
    const readingQuestion2 = document.getElementById("readingQuestion2");
    const readingQuestion3 = document.getElementById("readingQuestion3");
 
    const questionLevel1_1 = "1.	ステーブンの妻の名前はなんですか？";
    const readingComp1A = document.getElementById("readingComp1A");
    const readingComp1B = document.getElementById("readingComp1B");
    const readingComp1C = document.getElementById("readingComp1C");
    const readingComp1D = document.getElementById("readingComp1D");
 
    const answerLabel1A = document.getElementById("answerLabel1A");
    const answerLabel1B = document.getElementById("answerLabel1B");
    const answerLabel1C = document.getElementById("answerLabel1C");
    const answerLabel1D = document.getElementById("answerLabel1D");
 
    const questionLevel1_1Choices = ["a. Seth", "b. Samantha", "c. Sherry", "d. Steve"];
    
    const questionLevel1_2 = "2.	Sethは何年生ですか？";
    const readingComp2A = document.getElementById("readingComp2A");
    const readingComp2B = document.getElementById("readingComp2B");
    const readingComp2C = document.getElementById("readingComp2C");
    const readingComp2D = document.getElementById("readingComp2D");
 
    const answerLabel2A = document.getElementById("answerLabel2A");
    const answerLabel2B = document.getElementById("answerLabel2B");
    const answerLabel2C = document.getElementById("answerLabel2C");
    const answerLabel2D = document.getElementById("answerLabel2D");
 
    const questionLevel1_2Choices = ["a. 5年生", "b. 6年生", "c. 2年生", "d. 4年生"];
 
    const questionLevel1_3 = "3.	Sherryの職業はなんですか？";
    const readingComp3A = document.getElementById("readingComp3A");
    const readingComp3B = document.getElementById("readingComp3B");
    const readingComp3C = document.getElementById("readingComp3C");
    const readingComp3D = document.getElementById("readingComp3D");
 
    const answerLabel3A = document.getElementById("answerLabel3A");
    const answerLabel3B = document.getElementById("answerLabel3B");
    const answerLabel3C = document.getElementById("answerLabel3C");
    const answerLabel3D = document.getElementById("answerLabel3D");
 
    const questionLevel1_3Choices = ["a. doctor", "b. teacher", "c. bakery", "d. housewife"];

    readingLine1.innerText = level1Line1;
    readingLine2.innerText = level1Line2;
    readingLine3.innerText = level1Line3;
    readingLine4.innerText = level1Line4;
    readingAudio.setAttribute("src", "./BeVerbBeginnerRecoring_Level1.wav")

    readingQuestion1.innerText = questionLevel1_1;
    readingComp1A.setAttribute("value", "seth");
    answerLabel1A.innerText = questionLevel1_1Choices[0];
    readingComp1B.setAttribute("value", "samantha");
    answerLabel1B.innerText = questionLevel1_1Choices[1];
    readingComp1C.setAttribute("value", "sherry");
    answerLabel1C.innerText = questionLevel1_1Choices[2];
    readingComp1D.setAttribute("value", "steve");
    answerLabel1D.innerText = questionLevel1_1Choices[3];

    readingQuestion2.innerText = questionLevel1_2;
    readingComp2A.setAttribute("value", "fifth");
    answerLabel2A.innerText = questionLevel1_2Choices[0];
    readingComp2B.setAttribute("value", "sixth");
    answerLabel2B.innerText = questionLevel1_2Choices[1];
    readingComp2C.setAttribute("value", "second");
    answerLabel2C.innerText = questionLevel1_2Choices[2];
    readingComp2D.setAttribute("value", "fourth");
    answerLabel2D.innerText = questionLevel1_2Choices[3];

    readingQuestion3.innerText = questionLevel1_3;
    readingComp3A.setAttribute("value", "doctor");
    answerLabel3A.innerText = questionLevel1_3Choices[0];
    readingComp3B.setAttribute("value", "teacher");
    answerLabel3B.innerText = questionLevel1_3Choices[1];
    readingComp3C.setAttribute("value", "bakery");
    answerLabel3C.innerText = questionLevel1_3Choices[2];
    readingComp3D.setAttribute("value", "housewife");
    answerLabel3D.innerText = questionLevel1_3Choices[3];
};

loadDefaultReading();

function readingCheck(){
    const readingComp1_Answer = document.querySelector('input[name="readingComp1_Answer"]:checked').value;
    const readingComp2_Answer = document.querySelector('input[name="readingComp2_Answer"]:checked').value;
    const readingComp3_Answer = document.querySelector('input[name="readingComp3_Answer"]:checked').value;

    const answerNoAnswer = "Please select an answer.";
    const answerCorrect = "Correct! Well done!";
    const answerIncorrect = "Incorrect! Try again!";

    if (document.getElementById("levelSelect").value == "Level1") {

        if (readingComp1_Answer == null) {
            document.getElementById("readingQuestion1Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "red";
        } else if (readingComp1_Answer == "sherry") {
            document.getElementById("readingQuestion1Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "green";

        } else {
            document.getElementById("readingQuestion1Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "red";
        }

        if (readingComp2_Answer == null) {
            document.getElementById("readingQuestion2Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "red";
        } else if (readingComp2_Answer == "sixth") {
            document.getElementById("readingQuestion2Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "green";

        } else {
            document.getElementById("readingQuestion2Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "red";
        }

        if (readingComp3_Answer == null) {
            document.getElementById("readingQuestion3Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "red";
        } else if (readingComp3_Answer == "teacher") {
            document.getElementById("readingQuestion3Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "green";

        } else {
            document.getElementById("readingQuestion3Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "red";
        }

    } else if (document.getElementById("levelSelect").value == "Level2") {
        console.log(readingComp1_Answer);

        if (readingComp1_Answer == null) {
            document.getElementById("readingQuestion1Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "red";
        } else if (readingComp1_Answer == "cardiologist") {
            document.getElementById("readingQuestion1Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "green";

        } else {
            document.getElementById("readingQuestion1Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion1Tag").style.backgroundColor = "red";
        }

        if (readingComp2_Answer == null) {
            document.getElementById("readingQuestion2Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "red";
        } else if (readingComp2_Answer == "sherry") {
            document.getElementById("readingQuestion2Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "green";

        } else {
            document.getElementById("readingQuestion2Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion2Tag").style.backgroundColor = "red";
        }

        if (readingComp3_Answer == null) {
            document.getElementById("readingQuestion3Tag").innerText = answerNoAnswer;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "red";
        } else if (readingComp3_Answer == "42_39") {
            document.getElementById("readingQuestion3Tag").innerText = answerCorrect;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "green";
        } else {
            document.getElementById("readingQuestion3Tag").innerText = answerIncorrect;
            document.getElementById("readingQuestion3Tag").style.backgroundColor = "red";
        }
    }
}
