
const quiz = document.getElementById("quiz")
const pre = document.getElementById('pre')
const next = document.getElementById('next')
const showscore = document.getElementById('showscore')
const continuedata = document.getElementById('continue')
const submitname = document.getElementById('sdata')
const quiztitle = document.getElementById("quiztitle")
const correct = document.getElementById('correct')

const title = document.getElementById('title')
const form1 = document.getElementById("form1")
var radios = document.getElementsByTagName("input")
const btn2 = document.getElementById('btn-2')
const answers = document.querySelectorAll('.answer')
var radios = document.getElementsByTagName("input")
var options = document.getElementsByTagName("label")
const radioButtons = document.querySelectorAll('input[name="answer"]');

var result12 = [];
var options = ''


let count = 0






quiz.style.display = "none";
next.style.display = "none";
pre.style.display = "none";
showscore.style.display = "none";

quiztitle.style.display = "none";
form1.style.display = "block";


continuedata.addEventListener('click', () => {
    quiztitle.style.display = "none";
    next.style.display = "block";
    pre.style.display = "block";
    quiz.style.display = "block";
    mydisplayInfo()

})

// **********submit ur Name button*******************************************************
submitname.addEventListener('click', () => {

    var name = document.getElementById("name").value;
    console.log(name, ',]name');
    quiztitle.style.display = "block";
    form1.style.display = "none";
    title.innerHTML = "Welcome to Quiz" + " " + name;

})

next.addEventListener('click', increaseCounter)

function increaseCounter() {
    count++
    if (count < globalData.length) {
        globalData[count].answer
        mydisplayInfo()
    }
    else {
        quiz.style.display = "none";
        pre.style.display = "none";

        if (count === globalData.length) {
            btn2.style.display = 'none';
        }
    }
    displayScore() 

}
// increaseCounter()

// var items = { ...localStorage };
// function generateScore() {
//     var option = items
//     // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
//     return options
// }
// generateScore()

function displayScore() {
    // let options = generateScore()

    showscore.innerHTML = `
        <div class="test" id="s">
        <ul>
        <h2> Your score is ${score}</h2>
        ${options}
        <button onclick="location.reload()" class="bttn">cleare score</button>
        </ul>
        </div>
        `;
}


next.addEventListener('click', setting1)
function setting1() {
    if (count >= globalData.length) {

        next.style.visibility = "hidden";
        showscore.style.display = "block";
    }

    if (count != 0) {
        pre.style.visibility = "visible";
    }
    console.log(count, 0000);
}



pre.addEventListener('click', decreaseCounter)
function decreaseCounter() {
    count--
    if (count < globalData.length) {
        mydisplayInfo()
        next.style.visibility = "visible";
    }

    displayPreData()
}

// pre.addEventListener('click', regenerateScore)
function regenerateScore() {

    var option = result12.splice(count, 1)
    // let index = +x - 1
    // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
    console.log(option, 'jjjjjjj');
    return options
}

// pre.addEventListener('click', displayPreData)
function displayPreData() {
    var lastEntry = result12[result12.length - 1]
    console.log(lastEntry, 'lastEntry');

    for (const radioButton of radioButtons) {
        if (radioButton.id === lastEntry) {

            document.getElementsByClassName("answer").innerHTML
                = document.getElementById('lastEntry').value + " checked";

        }
        console.log(radioButton);
    }

}
