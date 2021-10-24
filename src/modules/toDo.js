import Task from "./task";
import Project from "./project";

const ToDo = (() => {
    let projectList = []
    const addProject(newProject){
        projectList.push(newProject)
    }
    const removeProject(remProject){
        for(let i=0;i<projectList.length;i++){
            if(projectList[i].getName()===remProject){
                projectList.splice(i,1)
            }
        }
    }
    const addTasktoProj(task,projectName){
        for(let i=0;i<projectList.length; i++){
            if(projectList[i].getName === projectName){
                projectList[i].addTask(task)
            }
        }
    }
})