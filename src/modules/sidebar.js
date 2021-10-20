const sidebar = document.querySelector(".sidebar")

export function initSidebar(){
    createHeader()
    createProjectForm()
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

    const newProjectName = document.createElement("input")
    newProjectName.name = "projectName"
    newProjectName.type = "text"
    newProjectName.id = "project-name-input-field"
    newProjectName.placeholder = "Enter New Project"

    const submitButton = document.createElement("input")
    submitButton.name = "submitButton"
    submitButton.type = "submit"
    submitButton.value = "Create"
    submitButton.id = "project-submit-button"
    submitButton.addEventListener("click",e=>{
        e.preventDefault()
    })

    form.appendChild(newProjectName)
    form.appendChild(submitButton)

    sidebar.appendChild(form)
}