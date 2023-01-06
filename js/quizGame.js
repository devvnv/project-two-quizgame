let  globalData = ''
var result12 = [];
var result13 = []
let score = 0

let url = '../Quiz.json'
fetch(url)
    .then((response) => response.json())
    .then((quizData) => {
          globalData = quizData
        // ********** IDS************************************************************************
        // **************************************************************************************
       
        var pre = document.getElementById('pre')
        const next = document.getElementById('next')
        const answers = document.querySelectorAll('.answer')

        var options = ''
        
        var count = 0

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

        //ans----------------------------------------------------------

        function resultData() {
            let checkAns = getCheckAns()
            console.log(checkAns, 'checkans');
            if (checkAns == globalData[count].correct) {
                score++
                result12.push(checkAns) 
                
                console.log(result12);
                return 'true'
            }
            else {
                result12.push(checkAns)
                
                console.log(result12) 
                return 'false'
            }

        }

        

        function setLocal21() {
            localStorage.setItem('Result12-Data', JSON.stringify(result12));
            
        }
        setLocal21()
        
     

        localStorage.clear();

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
    