const sidebar = document.querySelector(".sidebar")
const projectBox = document.createElement("div")
projectBox.id = "project-box"

export function initSidebar(){
    createProjectForm()
    createHeader()
    createHome()
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

function createProjectForm(){
    const form = document.createElement("form")
    form.id = "project-form"

    const textField = document.createElement("input")
    textField.name = "projectName"
    textField.type = "text"
    textField.id = "project-name-input-field"
    textField.placeholder = "Enter New Project"
    textField.required = true

    const submitButton = document.createElement("input")
    submitButton.name = "submitButton"
    submitButton.type = "submit"
    submitButton.value = "Create"
    submitButton.id = "project-submit-button"
    submitButton.addEventListener("click",e=>{
        e.preventDefault()
        const inputField = document.querySelector("#project-name-input-field")
        const projectName = inputField.value 
        if(projectName.length === 0 || projectBox.length>25){
            alert("Project name length should be between 1 and 25")
            return
        }
        const button = document.createElement("button")
        button.classList.add("project")
        button.textContent = projectName
        buttonAddEventListener(button)
        inputField.value = ""
        projectBox.append(button)
    })

    form.appendChild(textField)
    form.appendChild(submitButton)

    sidebar.appendChild(form)
}

function createHome(){
    const home = document.createElement("button")
    home.id = "home"
    home.classList.add("project")
    home.textContent = "Home"
    buttonAddEventListener(home)
    
    projectBox.append(home)
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