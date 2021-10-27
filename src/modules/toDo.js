import Task from "./task";
import Project from "./project";

export default class TodoList{

    static projectList = []

    static addProject(projectName){
        if(!this.isDuplicate(projectName)){
            this.projectList.push(projectName)
        }
        localStorage.setItem('projectList',JSON.stringify(this.projectList))
    }
    static isDuplicate(projectName){
        for(let i=0;i<this.projectList.length;i++){
            if(this.projectList[i].getName()===projectName.getName()){
                return true
            }
        }
        return false
    }
    static removeProject(projectName){
        for(let i=0;i<this.projectList.length;i++){
            if(this.projectList[i].getName()===projectName){
                this.projectList.splice(i,1)
            }
        }
    }
    static addTask(projectName,task){
        for(let i=0;i<this.projectList.length;i++){
            if(this.projectList[i].getName()===projectName){
                this.projectList[i].addTask(task)
            }
        }
        localStorage.setItem('projectList',JSON.stringify(this.projectList))
    }
    static removeTask(projectName, task){
    }
    static getTaskList(projectName){
        for(let i=0;i<this.projectList.length;i++){
            if(this.projectList[i].getName() === projectName){
                return this.projectList[i].getTaskList()
            }
        }
    }
    static getProjectList(){
        const projects = JSON.parse(localStorage.getItem('projectList'))
        let newProjectList = []
        if(projects){
            for(let i=0;i<projects.length;i++){
                const newProject = new Project(projects[i].name)
                for(let j=0;j<projects[i].tasks.length;j++){
                    newProject.addTask(projects[i].tasks[j])
                }
                newProjectList.push(newProject)
            }
            this.projectList = newProjectList
        }
        
        return this.projectList
    }
}