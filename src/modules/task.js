export default class Task{
    constructor(title,dueDate){
        this.title = title
        this.dueDate = dueDate
    }
    getTitle() {
        return this.title
    }
    getDueDate(){
        return this.dueDate
    }
    setDueDate(date){
        this.dueDate = date
    }
    setTitle(title){
        this.title = title
    }
}