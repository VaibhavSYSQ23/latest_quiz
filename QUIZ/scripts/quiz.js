// the data for the questions and options and the correct answer is displayed here 
var data = [{ question: 'what is my name', opt: ['Vaibhav', 'Rakesh', 'Vimlesh'], correctAns: 'Vaibhav' },
{ question: 'what is my age', opt: ['20', '21', '22'], correctAns: '21' },
{ question: 'where do i live', opt: ['Jaipur', 'Jodhpur', 'Bikaner'], correctAns: 'Jaipur' },
{ question: 'what am i learning now', opt: ['Javascript', 'Reactjs', 'Angular'], correctAns: 'Javascript' },
{ question: 'From where i have completed my college', opt: ['Manipal University Jaipur', 'Rajasthan University', 'MNIT'], correctAns: 'Manipal University Jaipur' },
{ question: 'what course have you opted', opt: ['BCA', 'MCA', 'BBA'], correctAns: 'BCA' }]

activeQuestion = 0;

function onClicked(i) {
    console.log(document.getElementById("option"+i).innerHTML === data[activeQuestion].correctAns); 
    
    if (activeQuestion === (data.length - 1)) {
        setTimeout(function () {
            window.location.href = "/pages/Ending.html";
        }, 500);
    } else {
        setTimeout(function () {
            getQuestion(++activeQuestion)
        }, 500);
    }
}

function getQuestion(j) {
    activeQuestion = j;
    document.getElementById("questiOn").innerHTML = data[j].question;
    document.getElementById("option0").innerHTML = data[j].opt[0];
    document.getElementById("option1").innerHTML = data[j].opt[1];
    document.getElementById("option2").innerHTML = data[j].opt[2];
}