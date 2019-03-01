console.log(5)
const submit = document.getElementById('submit')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')
const result4 = document.getElementById('result4')
const result_word_list = ["Yes", "No","Maybe"]
var name = '';
var question = '';


function getName(element){
    name = element.value
    console.log("name", name)
}

function getQuestion(element){
    question = element.value
    console.log("question",question )
}

function generator(){
    console.log(name);
    console.log(question);
if ((name.length!==0)&&(question.length!==0)) {
    var ball_ans =random_answer();
    result1.innerHTML = ball_ans
    result2.innerHTML += name +"<br>"
    result3.innerHTML += question +"<br>"
    result4.innerHTML += ball_ans+"<br>"
    console.log("sdfkjbsdifd")
} else{
    console.log("erroxfaxcdr");
}}

window.onload = function() {
    name = document.getElementById('Name').value
    question = document.getElementById('Question').value
    console.log(name)
    console.log(question)
}
    
function random_answer(){
        var index = (Math.random() * (result_word_list.length -1)).toFixed()
        return result_word_list[index]
}
    

submit.addEventListener('click', generator)