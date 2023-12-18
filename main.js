const questions = [
    {
    title: "Question 1",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 2",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 3",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 4",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 5",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 6",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 7",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 8",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 9",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
},
{
    title: "Question 10",
    trueAnswer:"A",
    variants:["A", "B", "C", "D","E"],
}
];
class QuestionGame{
    point = 0;
    nextQIndex = -1;
    qData = [];
    currentQuestion = null;
    constructor(data){
        this.qData = data
    }

    nextQuestion(){
        if(this.nextQIndex == this.qData.length-1){
            console.log("Quiz Finish...");
            return false
        }else{
            this.nextQIndex +=1;
        }

        const questionItem = this.qData[this.nextQIndex];
        this.currentQuestion = questionItem
        
        return questionItem;
    }
}


const qTitle = document.querySelector("#qTitle")
const btnGroup = document.querySelector("#btnGroup");
const color = document.querySelector("#color");
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
        // gameQ.incrementPoint
        color.style.backgroundColor = "#5cb85c";
        
    }else{
        console.log("False Answer");
        color.style.backgroundColor = "#d9534f";

    }
    startGame();
}




