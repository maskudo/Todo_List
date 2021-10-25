import Project from "./project"
import TodoList from "./toDo"

const sidebar = document.querySelector(".sidebar")
const projectBox = document.createElement("div")
projectBox.id = "project-box"

export function initSidebar(){
    createProjectForm()
    createHeader()
    // createHome()
    sidebar.append(projectBox)
}
function createHeader(){
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    header.id = "sidebar-header"
    h1.textContent = "Projects"

    header.append(h1)
    sidebar.append(header)
}
// function createHome(){
//     const home = document.createElement("button")
//     home.id = "home"
//     home.classList.add("project")
//     home.textContent = "Home"
//     buttonAddEventListener(home)
//     setActive(home)
//     projectBox.append(home)
// }

function createProjectForm(){
    const form = document.createElement("form")
    form.id = "project-form"
    form.innerHTML = `
    <input type="text" name = "projectName" placeholder="Enter new Project" id = "project-name-input-field" required="true" minlength="3" maxlength="70">
    <input type="submit" name="submitButton" value="Create" id="project-submit-button">
    `
    sidebar.appendChild(form)

    const submitButton = document.querySelector("#project-submit-button")
    submitButton.addEventListener("click",e=>{
        e.preventDefault()
        //add project
        //display project
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
}

function buttonAddEventListener(button){
    button.addEventListener("click",() => {
        setActive(button)
    })
}
function displayProjects(){

}
// function createProjectButton(){
//     const inputField = document.querySelector("#project-name-input-field")
//         const projectName = inputField.value 
//         if(projectName.length === 0 || projectBox.length>25){
//             alert("Project name length should be between 1 and 25")
//             return
//         }
//         const button = document.createElement("button")
//         const leftSide = document.createElement("div")
//         const rightSide = document.createElement("button")

//         leftSide.textContent = `${projectName}`
//         leftSide.className = "project-button-left-side"
//         rightSide.textContent = "X"
//         rightSide.className = "project-button-right-side"
//         rightSide.addEventListener("click", () => {
//             button.remove()
//         })

//         button.classList.add("project")
//         buttonAddEventListener(button)
//         inputField.value = ""

//         button.append(leftSide)
//         button.append(rightSide)
//         projectBox.append(button)
// }