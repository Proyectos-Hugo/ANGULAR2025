import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskModuleService {

  constructor() { }

  task = [
    { id:1, titulo: "Tarea 1", description:"Terminar Angular"},
    { id:2, titulo: "Tarea 2", description:"Terminar Jasmine"}
  ];

  getTask(){
    return this.task;
  }

  getTaskById(id:number){
    return this.task.find(t=> t.id = id);
  }

  createTask(newTask: any) {
    const lastTask = this.task[this.task.length - 1];
    newTask.id = lastTask ? lastTask.id + 1 : 1;
    this.task.push(newTask);
  }

  updateTask(Task: any) {
    const index = this.task.findIndex(t => t.id === Task.id);
    if (index !== -1) this.task[index] = Task;
  }

  deleteTask(id:number){
    this.task = this.task.filter(t => t.id !== id);
  }
}
