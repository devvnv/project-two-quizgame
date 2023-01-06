let  globalData = ''
var result12 = [];
let url = '../Quiz.json'
fetch(url)
    .then((response) => response.json())
    .then((quizData) => {
          globalData = quizData
        // ********** IDS************************************************************************
        // **************************************************************************************
       
        var pre = document.getElementById('pre')
        const next = document.getElementById('next')

        const showscore = document.getElementById('showscore')
        const quiz = document.getElementById("quiz")

        const continuedata = document.getElementById('continue')
        const submitname = document.getElementById('sdata')
        const title = document.getElementById('title')
        const quiztitle = document.getElementById("quiztitle")
        const form1 = document.getElementById("form1")
        var radios = document.getElementsByTagName("input")

        const btn2 = document.getElementById('btn-2')
        const answers = document.querySelectorAll('.answer')
        var radios = document.getElementsByTagName("input")
        var options = document.getElementsByTagName("label")
        const radioButtons = document.querySelectorAll('input[name="answer"]');

        
        var options = ''

        var score = 0
        var count = 0






        // **********Continue to game button*****************************************************

        // continuedata.addEventListener('click', () => {
        //     quiztitle.style.display = "none";
        //     next.style.display = "block";
        //     pre.style.display = "block";
        //     quiz.style.display = "block";
        //     mydisplayInfo()

        // })


        // **********Function for display Data***************************************************
        // **************************************************************************************

        // let mydisplayInfo = () => {
            
            
        //     question.innerText = globalData[count].question
        //     a.innerText = globalData[count].a
        //     b.innerText = globalData[count].b
        //     c.innerText = globalData[count].c
        //     d.innerText = globalData[count].d

        //     if (count === 0) {
        //         pre.style.visibility = "hidden";
        //     }
        // }


        function getCheckAns() {
            let answer;
            answers.forEach(AnsElement => {
                if (AnsElement.checked) {
                    answer = AnsElement.id
                }
            });
            return answer
        }


        // **********Next button*****************************************************************
        // **************************************************************************************



        next.addEventListener('click', resultData)
        next.addEventListener('click', setLocal21)
        // next.addEventListener('click', increaseCounter)

        // next.addEventListener('click', displayScore)
        // next.addEventListener('click', setting1)


        //ans----------------------------------------------------------

        function resultData() {
            let checkAns = getCheckAns()
            console.log(checkAns, 'checkans');
            if (checkAns == globalData[count].correct) {
                score++
                result12.push(checkAns);
                console.log(result12);
                return 'true'
            }
            else {
                result12.push(checkAns);
                console.log(result12);
                return 'false'
            }

        }
        // resultData()


        function setLocal21() {
            localStorage.setItem('Result12-Data', JSON.stringify(result12));
        }
        setLocal21()
        // //--------------------------------------------------------------------------------
        // function increaseCounter() {
        //     count++
        //     if (count < globalData.length) {
        //         globalData[count].answer
        //         mydisplayInfo()
        //     }
        //     else {
        //         quiz.style.display = "none";
        //         pre.style.display = "none";

        //         if (count === globalData.length) {
        //             btn2.style.display = 'none';
        //         }
        //     }
        //     displayScore()
        // }
        // increaseCounter()


        localStorage.clear();


        // function generateScore() {
        //     var option = items
        //     // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
        //     return options
        // }
        // generateScore()


        // function displayScore() {
        //     let options = generateScore()

        //     showscore.innerHTML = `
        //         <div class="test" id="s">
        //         <ul>
        //         <h2> Your score is ${score}</h2>
        //         ${options}
        //         <button onclick="location.reload()" class="bttn">cleare score</button>
        //         </ul>
        //         </div>
        //         `;
        // }
        // displayScore()



        // function setting1() {
        //     if (count >= quizData.length) {

        //         next.style.visibility = "hidden";
        //         showscore.style.display = "block";
        //     }

        //     if (count != 0) {
        //         pre.style.visibility = "visible";
        //     }
        //     console.log(count, 0000);
        // }


        // var items = { ...localStorage };

        // function regenerateScore() {

        //     var option = result12.splice(count, 1)
        //     // let index = +x - 1
        //     // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
        //     console.log(option, 'jjjjjjj');
        //     return options
        // }


        // **********previous button*************************************************************
        // **************************************************************************************
        // pre.addEventListener('click', decreaseCounter)
        pre.addEventListener('click', regenerateScore)
        // pre.addEventListener('click', displayPreData)

        // function decreaseCounter() {
        //     count--
        //     if (count < globalData.length) {
        //         mydisplayInfo()
        //         next.style.visibility = "visible";
        //     }
        // }
        // decreaseCounter()

        // function regenerateScore() {

        //     var option = result12.splice(count, 1)
        //     // let index = +x - 1
        //     // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
        //     console.log(option, 'jjjjjjj');
        //     return options
        // }
        
        // regenerateScore()


        // function displayPreData() {
        //     var lastEntry = result12[result12.length - 1]
        //     console.log(lastEntry, 'lastEntry');

        //     for (const radioButton of radioButtons) {
        //         if (radioButton.id === lastEntry) {

        //             document.getElementsByClassName("answer").innerHTML
        //                 = document.getElementById('lastEntry').value + " checked";

        //         }
        //         console.log(radioButton);
        //     }

        // }
        




    })


    
    const question = document.getElementById('question')
    const a = document.getElementById('a_text')
    const b = document.getElementById('b_text')
    const c = document.getElementById('c_text')
    const d = document.getElementById('d_text')

    let mydisplayInfo = () => {
            
        question.innerText = globalData[count].question
        a.innerText = globalData[count].a
        b.innerText = globalData[count].b
        c.innerText = globalData[count].c
        d.innerText = globalData[count].d

        if (count === 0) {
            pre.style.visibility = "hidden";
        }
    }
    function getCheckAns() {
        let answer;
        answers.forEach(AnsElement => {
            if (AnsElement.checked) {
                answer = AnsElement.id
            }
        });
        return answer
    }


    pre.addEventListener('click', decreaseCounter)
    function decreaseCounter() {
        count--
        if (count < globalData.length) {
            mydisplayInfo()
            next.style.visibility = "visible";
        }

    }
    pre.addEventListener('click', regenerateScore)
    function regenerateScore() {

        var option = result12.splice(count, 1)
        // let index = +x - 1
        // options += `<li class="scorboard">Question ${index} -> ${option}</li>`
        console.log(option, 'jjjjjjj');
        return options
    }
    
    regenerateScore()
    
 
    
    pre.addEventListener('click', displayPreData)
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
    