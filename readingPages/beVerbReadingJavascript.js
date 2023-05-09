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


   const questionLevel1_3 = "3.	Sherryの職業はなんですか？";


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
            readingComp1D.setAttribute("value", "steve");
            answerLabel1D.innerText = questionLevel1_1Choices[3];
            break;

        case "Level2":
            readingLine1.innerText = level2Line1;
            readingLine2.innerText = level2Line2;
            readingLine3.innerText = level2Line3;
            readingLine4.innerText = level2Line4;
            readingAudio.setAttribute("src", "./BeVerbBeginnerRecoring_Level2.wav")
            break;
   }

}

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
 

    readingLine1.innerText = level1Line1;
    readingLine2.innerText = level1Line2;
    readingLine3.innerText = level1Line3;
    readingLine4.innerText = level1Line4;
    readingAudio.setAttribute("src", "./BeVerbBeginnerRecoring_Level1.wav")
}

loadDefaultReading();

