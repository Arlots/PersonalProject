//This function needs to active when user pushes the "reload" button and swap the reading text to match the chosen difficulty.

function readingSwap(){
   const selectedLevel = document.getElementById("levelSelect");
   const readingLine1 = document.getElementById("readingLine1");
   const readingLine2 = document.getElementById("readingLine2");
   const readingLine3 = document.getElementById("readingLine3");
   const readingLine4 = document.getElementById("readingLine4");

   const level1Line1 = "This is Steven. Steven is forty-two. Steven is a doctor. Steven is smart. Steven is clever. He is a husband. His wife is Sherry."
   const level1Line2 = "Sherry is thirty-nine. Sherry is a teacher. She is friendly. She is fun. "
   const level1Line3 = "Sherry and Steven are a couple. They are also parents. "
   const level1Line4 = "Their children are Samantha and Seth. Seth is a sixth grader. Samantha is a junior high school student."

   const level2Line1 = "This is Steven. Steven is forty-two. Steven is a cardiologist. Steven is intelligent. Steven is clever. He is a husband. His wife is Sherry."
   const level2Line2 = "Sherry is thirty-nine. Sherry is a teacher. She is bubbly. She is outgoing. "
   const level2Line3 = "Sherry and Steven are a couple. They are also parents. "
   const level2Line4 = "Their children are Samantha and Seth. Seth is a sixth grader. Samantha is a junior high school student. They are rowdy. "


   switch (selectedLevel.value) {
        case "Level1":
        default:
            console.log("Level 1 is selected");
            readingLine1.innerText = level1Line1;
            readingLine2.innerText = level1Line2;
            readingLine3.innerText = level1Line3;
            readingLine4.innerText = level1Line4;
            break;
        case "Level2":
            console.log("Level 2 is Selected");
            readingLine1.innerText = level2Line1;
            readingLine2.innerText = level2Line2;
            readingLine3.innerText = level2Line3;
            readingLine4.innerText = level2Line4;
   }

}

