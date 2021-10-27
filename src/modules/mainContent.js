import { format, subDays } from "date-fns"
import Task from "./task"
import TodoList from "./toDo"
const mainContent = document.querySelector(".main-content")


let today = new Date()
today = format(today, "yyyy-MM-dd")


export function initMainContent(){
    createAddTaskForm()
    createTaskbox()
    displayTask()
}

function createTaskbox(){
    const taskBox = document.createElement("div")
    const taskHeader = document.createElement("h2")
    taskHeader.textContent = "Tasks"

    taskBox.id = "task-box"

    taskBox.appendChild(taskHeader)
    mainContent.appendChild(taskBox)
}

function createAddTaskForm(){
    const form = document.createElement("form")
    form.id = "task-form"
    form.innerHTML = `
    <input type="text" name="title" id="task-input-field" placeholder="Enter Task" required minlength="1" maxlength="70">
    <input type="date" name="deadline" id="task-deadline">
    <input type="submit" name="submirButton" value="Create" id="task-submit-button">
    `
    mainContent.append(form)

    const submitButton = document.querySelector("#task-submit-button")
    submitButton.addEventListener("click", e => {
        e.preventDefault()
        addTaskToProject()
    })
}
function addTaskToProject(){
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
    const newTask = new Task(taskTitle, taskDeadline.value)
    const activeProject = document.querySelector(".active")
    const projectName = activeProject.querySelector(".project-button-left-side").textContent
    
    TodoList.addTask(projectName, newTask)
    displayTask()
    // const button = document.createElement("button")
    // const leftSide = document.createElement("div")
    // const rightSide = document.createElement("div")
    // const date = document.createElement("p")
    // const cross  =document.createElement("button")

    // cross.textContent = "X"
    // date.textContent = taskDeadline.value
    // leftSide.textContent = taskTitle
    // leftSide.classList.add("task-button-left-side")
    // rightSide.classList.add("task-button-right-side")
    // button.classList.add("task")
    // inputField.value = ""

    // cross.addEventListener("click", () => {
    //     button.remove()
    // })

    // rightSide.appendChild(date)
    // rightSide.appendChild(cross)
    // button.appendChild(leftSide)
    // button.appendChild(rightSide)
    // taskBox.append(button)
}
export function displayTask(){
    const activeProject = document.querySelector(".active")
    const taskBox = document.querySelector("#task-box")
    let projectName
    let taskList

    projectName = activeProject.querySelector(".project-button-left-side").textContent
    taskList = TodoList.getTaskList(projectName)
    let content = ""
    for(let i=0;i<taskList.length;i++){
        content+=`
        <button class="task" data-number = "${i}">
            <div class="task-button-left-side">${taskList[i].title}</div>
            <div class="task-button-right-side">
                <div>${taskList[i].dueDate}</div>
                <div class="cross">X</div>
            </div>
        </button>
        `
    }
    taskBox.innerHTML = content
    crossAddEventListener()

}

function crossAddEventListener(){
    const activeProject = document.querySelector(".active")
    const projectName = activeProject.querySelector(".project-button-left-side").textContent
    const tasks = document.querySelectorAll(".task")
    tasks.forEach((task) => {
        const cross = task.querySelector(".cross")
        cross.addEventListener("click",() => {
            const taskNumber = task.dataset.number
            TodoList.removeTask(projectName,taskNumber)
            displayTask()
        })
    })
}