var content = document.getElementById("table")
var grades = document.querySelectorAll("#grade")
var content1 = document.getElementById("table1")
var gpa = document.querySelectorAll("#gpa")
var credits = document.querySelectorAll("#credits")
var res = document.getElementById("result")
var res1 = document.getElementById("result2")
var i = 1
var cgpa_n = 1
const mark_style="mt-1 mx-auto px-2 py-1 text-lg w-[290px] bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-lg rounded-sm focus:ring-1";
const gpa_style="mt-1 mx-auto px-2 py-1 text-lg w-full bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-lg rounded-sm focus:ring-1";
const credit_style="mt-1 mx-auto px-2 py-1 text-lg w-[180px] bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-lg rounded-sm focus:ring-1"
grade = []
sem=[]
function newItem(){
    var node = document.createElement("div")
    node.setAttribute("class","flex mb-2")
    var input = document.createElement("input")
    input.setAttribute("id","grade")
    input.setAttribute("class", mark_style)
    input.setAttribute("placeholder","Marks (Out of 100)")  
    input.setAttribute("type","number")
    input.setAttribute("min","0")
    input.setAttribute("max","100")
    input.setAttribute("type","number")  
    node.appendChild(input)
    var input = document.createElement("input")
    input.setAttribute("id","credits")
    input.setAttribute("class", credit_style)
    input.setAttribute("placeholder","Credits") 
    input.setAttribute("type","number") 
    node.appendChild(input)
    content.appendChild(node)
    i = i+1
}

function newItemSem(){
    cgpa_n = cgpa_n+1
    var node = document.createElement("div")
    node.setAttribute("class","flex mb-2")
    var input = document.createElement("input")
    input.setAttribute("id","gpa")
    input.setAttribute("class", gpa_style)
    input.setAttribute("placeholder","Semester "+cgpa_n+" GPA")  
    input.setAttribute("type","number")
    input.setAttribute("min","0")
    input.setAttribute("max","10")
    input.setAttribute("type","number")  
    node.appendChild(input)
    content1.appendChild(node)
}

function cal(){
    grade = []
    grades = document.querySelectorAll("#grade")
    credits = document.querySelectorAll("#credits")
    for (var j = 0; j < i; j++){
            grade_point(grades[j].value)
    }
    calculate_gpa(grade,credits)
}

function calCGPA(){
    grade = []
    gpa = document.querySelectorAll("#gpa")
    var sum=0
    for (var j = 0; j < cgpa_n; j++){
        gpa_float = parseFloat(gpa[j].value);     
        if(gpa_float <= 10 && gpa_float >= 0){
            sum = sum+gpa_float;
        }
        else {
            sum = "Error"
            break
        }
    }
    if( sum == "Error"){
        result1("Error")
    }
    else{
        result1(sum/cgpa_n)
    }
}

function grade_point(marks){
    var point = 0
    if(marks < 0 || marks > 100)
        point=NaN
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
    }
    var credit = 0
    for(var j = 0; j < grade.length; j++){
        if(credits[j] != undefined)
            credit += parseInt(credits[j].value)
    }
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
        res.innerHTML = '<b class="text-2xl">Result</b><br>GPA is '+ +(Math.round(gpa + "e+2")  + "e-2") + "/10"
        res.style.background = "#56C644"
        }
        else{
            res.innerHTML = '<b class="text-xl">You\'re hurting me by giving wrong inputs :(</b><br>Check the GPA';
            res.style.background = "rgb(217 160 0)"        
        }
        res.style.color = "white"
    }
    else{
        if(!isNaN(gpa)){
            res.innerHTML = '<b class="text-2xl">Result</b><br>Failed'
            res.style.background = "#DB564E"
        }
        else{
            res.innerHTML = '<b class="text-xl">You\'re hurting me by giving wrong inputs :(</b><br>Check the GPA';
            res.style.background = "rgb(217 160 0)"       
        }
        res.style.color = "white"
    }
}

function result1(gpa){
    if(!isNaN(gpa)){
        res1.innerHTML = '<b class="text-2xl">Result</b><br>GPA is '+ +(Math.round(gpa + "e+3")  + "e-3") + "/10"
        res1.style.background = "#56C644"
    }
    else{
        res1.innerHTML = '<b class="text-xl">You\'re hurting me by giving wrong inputs :(</b><br>Check the GPA';
        res1.style.background = "rgb(217 160 0)"        
    }
    res1.style.color = "white"
}