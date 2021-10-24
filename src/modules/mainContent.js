import { format, subDays } from "date-fns"
const mainContent = document.querySelector(".main-content")


let today = new Date()
today = format(today, "yyyy-MM-dd")


export function initMainContent(){
    createListForm()
    createTaskbox()
}

function createTaskbox(){
    const taskBox = document.createElement("div")
    const taskHeader = document.createElement("h2")
    taskHeader.textContent = "Tasks"

    taskBox.id = "task-box"

    taskBox.appendChild(taskHeader)
    mainContent.appendChild(taskBox)
}

function createListForm(){
    const form = document.createElement("form")
    form.id = "task-form"

    const textField = document.createElement("input")
    textField.name = "title"
    textField.type = "text"
    textField.id = "task-input-field"
    textField.placeholder = "Enter Task"
    textField.required = true
    
    const deadline = document.createElement("input")
    deadline.type = "date"
    deadline.name = "deadline"
    deadline.id = "task-deadline"

    const submitButton = document.createElement("input")
    submitButton.name = "submitButton"
    submitButton.type = "submit"
    submitButton.value = "Create"
    submitButton.id = "task-submit-button"

    submitButton.addEventListener("click", e => {
        e.preventDefault()
        createTaskButton()
    })
    
    form.appendChild(textField)
    form.appendChild(deadline)
    form.appendChild(submitButton)
    mainContent.append(form)
}
function createTaskButton(){
    const inputField = document.querySelector("#task-input-field")
    const taskDeadline = document.querySelector("#task-deadline")
    const taskBox = document.querySelector("#task-box")
    
    const taskTitle = inputField.value 
    if(taskTitle.length === 0 || taskTitle.length>70){
        alert("Task title length should be between 1 and 70")
        return
    }
    if(!taskDeadline.value){
        taskDeadline.value = today
    }

    const button = document.createElement("button")
    const leftSide = document.createElement("div")
    const rightSide = document.createElement("div")
    const date = document.createElement("p")
    const cross  =document.createElement("button")

    cross.textContent = "X"
    date.textContent = taskDeadline.value
    leftSide.textContent = taskTitle
    leftSide.classList.add("task-button-left-side")
    rightSide.classList.add("task-button-right-side")
    button.classList.add("task")
    inputField.value = ""

    cross.addEventListener("click", () => {
        button.remove()
    })

    rightSide.appendChild(date)
    rightSide.appendChild(cross)
    button.appendChild(leftSide)
    button.appendChild(rightSide)
    taskBox.append(button)
}