export default class Project{
    constructor(name){
        this.name = name
        this.tasks = []
    }
    getName(){
        return this.name
    }
    addTask(task){
        this.tasks.push(task)
    }
    removeTask(number){
        this.tasks.splice(number,1)
    }
}