import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskModuleService } from '../../Service/task-module.service';

@Component({
  selector: 'app-task-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  task: any;

  constructor(private route: ActivatedRoute, private taskModule: TaskModuleService) {
    const paramId = this.route.snapshot.paramMap.get('id');
    const id = paramId ? Number(paramId) : null;
    this.task = id !== null ? this.taskModule.getTaskById(id) : null;
  }
}
