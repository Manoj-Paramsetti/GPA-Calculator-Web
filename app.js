var content = document.getElementById("table")
var grades = document.querySelectorAll("#grade")
var credits = document.querySelectorAll("#credits")
var res = document.getElementById("result")
var i = 2
grade = []
function newItem(){
    var node = document.createElement("section")
    node.setAttribute("id","table--content")
    var input = document.createElement("input")
    input.setAttribute("id","grade")
    input.setAttribute("placeholder","Mark (marks out of 100)")  
    input.setAttribute("type","number")
    input.setAttribute("min","0")
    input.setAttribute("max","100")
    input.setAttribute("type","number")  
    node.appendChild(input)
    var input = document.createElement("div")
    input.setAttribute("style","width: 8.5px")
    node.appendChild(input)
    var input = document.createElement("input")
    input.setAttribute("id","credits")
    input.setAttribute("placeholder","Credits") 
    input.setAttribute("type","number") 
    node.appendChild(input)
    content.appendChild(node)
    i = i+1
}
function cal(){
    grade = []
    grades = document.querySelectorAll("#grade")
    credits = document.querySelectorAll("#credits")
    for (var j = 0; j < i; j++){
            console.log("j=",j)
            grade_point(grades[j].value)
    }
    console.log(grade)
    calculate_gpa(grade,credits)
}
function grade_point(marks){
    var point = 0
    if(marks >= 90 && marks <= 100)
        point = 10
    if(marks >= 80 && marks <= 89)
        point = 9
    if(marks >= 70 && marks <= 79)
        point = 8
    if(marks >= 60 && marks <= 69)
        point = 7
    if(marks >= 50 && marks <= 59)
        point = 6
    grade.push(point)
}
function calculate_gpa(grade, credits){
    var sum = 0
    for (var j = 0; j < grade.length; j++){
        sum += parseInt(grade[j]) * parseInt(credits[j].value)
        console.log(j)
    }
    console.log(sum, parseInt(grade[0]) * parseInt(credits[0].value))
    var credit = 0
    for(var j = 0; j < grade.length; j++){
        if(credits[j] != undefined)
        credit += parseInt(credits[j].value)
        console.log(j)
    }
    console.log(sum,credit)
    result(sum/credit)
}
function result(gpa){
    pass = true
    grade.forEach( e =>{
        if(e == 0){
            pass = false
        }
    })
    //    content.innerHTML = init_start+init_end+'<section id = "table--content">Your gpa is '+gpa+"<section>"+credit
    if(pass){
        if(!isNaN(gpa)){
        res.innerHTML = '<b>Result</b><br><br> GPA is '+ +(Math.round(gpa + "e+2")  + "e-2") + "/10"
        res.style.background = "#0F9D58"
        }
        else{
            res.innerHTML = '<b>Result</b><br><br> Something went wrong.check your marks and credits'
            res.style.background = "#F4B400"        
        }
        res.style.color = "white"
    }
    else{
        if(!isNaN(gpa)){
            res.innerHTML = '<b>Result</b><br><br> Failed'
            res.style.background = "#DB4437"
        }
        else{
            res.innerHTML = '<b>Result</b><br><br> Something went wrong.check your marks and credits'
            res.style.background = "#F4B400"       
        }
        res.style.color = "white"
    }
}