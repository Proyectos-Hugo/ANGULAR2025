import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskModuleService } from '../../Service/task-module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks:any[]=[];
  taskById:any= null;
  searchId: number | null = null;

  constructor(private taskModule: TaskModuleService, private router:Router){}

  ngOnInit() {
    this.tasks = this.getTasks();
  }

  getTasks(){
    return this.taskModule.getTask();
  }

  getTasksById(){
    if(this.searchId !== null){
      const task = this.taskModule.getTaskById(this.searchId);
      this.taskById =task ? task : { error: 'No encontrada'};
    }
  }

  deleteTask(id:number){
    this.taskModule.deleteTask(id);
    return this.getTasks();
  }

  createTask(){
    this.router.navigate(['/tasks/create']);
  }

  updateTask(id:number){
    this.router.navigate(['/tasks/edit', id]);
  }

  viewTask(id:number){
    this.router.navigate(['/tasks/detail',id]);
  }
}
