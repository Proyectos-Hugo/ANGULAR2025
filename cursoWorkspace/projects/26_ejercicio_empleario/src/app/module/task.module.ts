import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
import { TaskFormComponent } from '../components/task-form/task-form.component';

@NgModule({
  imports: [CommonModule,FormsModule,TaskListComponent,TaskFormComponent,TaskDetailComponent],
  exports: [TaskListComponent,TaskFormComponent,TaskDetailComponent]
})
export class TaskModule {}
