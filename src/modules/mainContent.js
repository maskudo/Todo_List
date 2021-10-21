import { format, subDays } from "date-fns"

const mainContent = document.querySelector(".main-content")
const taskBox = document.createElement("div")
taskBox.id = "task-box"

let today = new Date()
today = format(today, "yyyy-MM-dd")


export function initMainContent(){
    createListForm()
    mainContent.appendChild(taskBox)
}

function createListForm(){
    const form = document.createElement("form")
    form.id = "task-form"

    const textField = document.createElement("input")
    textField.name = "title"
    textField.type = "text"
    textField.id = "task-input-field"
    textField.placeholder = "Task"
    textField.required = true
    
    const deadline = document.createElement("input")
    deadline.type = "date"
    deadline.name = "deadline"
    deadline.id = "task-deadline"

    const submitButton = document.createElement("input")
    submitButton.name = "submitButton"
    submitButton.type = "submit"
    submitButton.value = "Create"
    submitButton.id = "project-submit-button"

    submitButton.addEventListener("click", e => {
        e.preventDefault()
        const inputField = document.querySelector("#task-input-field")
        const taskDeadline = document.querySelector("#task-deadline")
        
        const taskTitle = inputField.value 
        if(taskTitle.length === 0 || taskTitle.length>70){
            alert("Task title length should be between 1 and 70")
            return
        }
        if(!taskDeadline.value){
            taskDeadline.value = today
        }

        const button = document.createElement("button")
        button.classList.add("task")
        button.textContent = `${taskTitle}: ${taskDeadline.value}`
        inputField.value = ""
        taskBox.append(button)
    })
    
    form.appendChild(textField)
    form.appendChild(deadline)
    form.appendChild(submitButton)
    mainContent.append(form)
}