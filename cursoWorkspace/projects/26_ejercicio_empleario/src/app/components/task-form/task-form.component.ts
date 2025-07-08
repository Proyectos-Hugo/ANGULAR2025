import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModuleService } from '../../Service/task-module.service';

@Component({
  selector: 'app-task-from',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: any = { titulo: '', description: '' };
  id: number | null;
  isEdit: boolean;

  constructor(private route: ActivatedRoute,private router: Router,private taskModule: TaskModuleService) {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;
    this.isEdit = this.id !== null;

    if (this.isEdit) {
      const existingTask = this.getTask();
      if (existingTask) this.task = { ...existingTask };
    }
  }

  getTask() {
    return this.id !== null ? this.taskModule.getTaskById(this.id) : null;
  }

  createTask(task: any) {
    return this.taskModule.createTask(task);
  }

  updateTask(task: any) {
    return this.taskModule.updateTask(task);
  }

  saveTask() {
    if (this.isEdit && this.id !== null) {
      this.updateTask(this.task);
    } else {
      this.createTask(this.task);
    }
    this.router.navigate(['/tasks']);
  }
}
