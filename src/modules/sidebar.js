import Project from "./project"
import TodoList from "./toDo"
import { displayTask } from "./mainContent"

const sidebar = document.querySelector(".sidebar")
const projectBox = document.createElement("div")
projectBox.id = "project-box"

export function initSidebar(){
    createProjectForm()
    createHeader()
    displayProjects()
}
function createHeader(){
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    header.id = "sidebar-header"
    h1.textContent = "Projects"

    header.append(h1)
    sidebar.append(header)
}

function createProjectForm(){
    const form = document.createElement("form")
    form.id = "project-form"
    form.innerHTML = `
    <input type="text" name = "projectName" placeholder="Enter new Project" id = "project-name-input-field" required="true" minlength="3" maxlength="25">
    <input type="submit" name="submitButton" value="Create" id="project-submit-button">
    `
    sidebar.appendChild(form)

    const submitButton = document.querySelector("#project-submit-button")
    submitButton.addEventListener("click",e=>{
        e.preventDefault()
        addProject()
        displayProjects()
    })
    
}


function setActive(activeButton){
    const projectButtons = document.querySelectorAll(".project")
    projectButtons.forEach(button =>{
        if(button.classList.contains("active")){
            button.classList.remove("active")
        }
    })
    activeButton.classList.add("active")
    displayTask()
}

function buttonAddEventListener(){
    const projectButtons = document.querySelectorAll(".project")
    projectButtons.forEach(button => {
        button.addEventListener("click",() => {
        setActive(button)
        })
    });
    projectButtons.forEach((project) => {
        const projectName = project.querySelector(".project-button-left-side").textContent
        const cross = project.querySelector(".cross")
        cross.addEventListener("click", () => {
            TodoList.removeProject(projectName)
            displayProjects()
        })
    })
}
function displayProjects(){
    const projectList = TodoList.getProjectList()
    let content = ''
    for(let i=0;i<projectList.length;i++){
        content += `<button class="project">
        <div class="project-button-left-side">${projectList[i].getName()}</div>
        <div class = "project-button-right-side cross"><i class="far fa-trash-alt"></i></div>
        </button>
        `
    }
    projectBox.innerHTML = content
    sidebar.append(projectBox)
    buttonAddEventListener()
    const activeProject = document.querySelector(".active")
    if(!activeProject){
        const firstProject = document.querySelector(".project")
        console.log(firstProject)
        if(firstProject){
            firstProject.classList.add("active")
        }
    }
}
function addProject(){
    const inputField = document.querySelector("#project-name-input-field")
    const projectName = inputField.value 
    if(projectName.length === 0 || projectBox.length>20){
        alert("Project name length should be between 1 and 20")
        return
    }
    
    const project = new Project(projectName)
    TodoList.addProject(project)
}
