const questions = [
    {
    title: "1.What is the capital of Canada?",
    trueAnswer:"A.Toronto",
    variants:["A.Toronto", "B.Vancouver", "C.Ottawa", "D.Montreal","E.Calgary"],
},
{
    title: "2.Who wrote To Kill a Mockingbird?",
    trueAnswer:"A.J.K. Rowling",
    variants:["A.J.K. Rowling", "B.Ernest Hemingway", "C.Harper Lee", "D.F. Scott Fitzgerald","E.George Orwell"],
},
{
    title: "3.Which planet is known as the Red Planet?",
    trueAnswer:"B.Mars",
    variants:["A.Venus", "B.Mars", "C.Jupiter", "D.Saturn","E.Neptune"],
},
{
    title: "4.In what year did the Titanic sink?",
    trueAnswer:"B.1912",
    variants:["A.1905", "B.1912", "C.1923", "D.1931","E.1940"],
},
{
    title: "5.Who is the protagonist in J.R.R. Tolkien's The Lord of the Rings?",
    trueAnswer:"E.Samwise Gamgee",
    variants:["A.Frodo Baggins", "B.Aragorn", "C.Legolas", "D.Gandalf","E.Samwise Gamgee"],
},
{
    title: "6.Which element has the chemical symbol H?",
    trueAnswer:"A.Hydrogen",
    variants:["A.Hydrogen", "B.Helium", "C.Hafnium", "D.Holmium","E.Hassium"],
},
{
    title: "7.Who painted Starry Night?",
    trueAnswer:"D.Leonardo da Vinci",
    variants:["A.Claude Monet", "B.Vincent van Gogh", "C.Pablo Picasso", "D.Leonardo da Vinci","E.Michelangelo"],
},
{
    title: "8.Which continent is home to the Sahara Desert?",
    trueAnswer:"B.Africa",
    variants:["A.Asia", "B.Africa", "C.South America", "D.Australia","E.Europe"],
},
{
    title: "9.What is the currency of Japan?",
    trueAnswer:"C.Yen",
    variants:["A.Won", "B.Peso", "C.Yen", "D.Ringgit","E.Baht"],
},
{
    title: "10.Who developed the theory of relativity?",
    trueAnswer:"B.Albert Einstein",
    variants:["A.Isaac Newton", "B.Albert Einstein", "C.Stephen Hawking", "D.Marie Curie","E.Niels Bohr"],
}
];

const qTitle = document.querySelector("#qTitle");
const incrementPoint = document.querySelector("#incrementPoint")
const btnGroup = document.querySelector("#btnGroup");
const color = document.querySelector("#color");
const progress = document.querySelector("#progress");
const finishG = document.querySelector("#finishG");
const quizBox = document.querySelector("#quizBox")
class QuestionGame{
    point = 0;
    nextQIndex = -1;
    qData = [];
    currentQuestion = null;
    progress = 0;
    constructor(data){
        this.qData = data
    }

    nextQuestion(){
        if(this.nextQIndex == this.qData.length-1){
            // console.log("Quiz Finish...");
            quizBox.innerHTML = "";
            finishG.style.display = "block"
            return false
        }else{
            this.nextQIndex +=1;
        }

        const questionItem = this.qData[this.nextQIndex];
        this.currentQuestion = questionItem
        
        return questionItem;
    }
}






const gameQ = new QuestionGame(questions);

function startGame(){
     gameQ.nextQuestion();
     const qObj = gameQ.currentQuestion
    qTitle.innerHTML = qObj.title
    btnGroup.innerHTML = qObj.variants.map(item =>`<button class="btn btn-outline-light answerItem"  onclick="selectItem('${item}')">${item}</button>`
    ).join("");
    console.log(qObj);
   
}
startGame();
function selectItem(userSelect){
    console.log(gameQ.currentQuestion);
    console.log(userSelect);
    if(userSelect == gameQ.currentQuestion.trueAnswer){
        console.log("true Answer");
        gameQ.point +=10;
        incrementPoint.innerHTML = gameQ.point; 
        color.style.backgroundColor = "#5cb85c";
        
    }else{
        console.log("False Answer");
        color.style.backgroundColor = "#d9534f";

    }
    startGame();
    gameQ.progress +=10;
    progress.style.width = `${gameQ.progress}%`
}




