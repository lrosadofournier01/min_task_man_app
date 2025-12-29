import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StatusEnum } from '../models/status-enum';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-createtasks',
  imports: [ AsyncPipe, FormsModule, ReactiveFormsModule ],
  templateUrl: './createtasks.html',
  styleUrl: './createtasks.css',
})
export class Createtasks {

  statuses$!: Observable<StatusEnum[]>

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    due_date: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private taskService: TaskService, private router: Router){}

  ngOnInit() {
    this.statuses$ = this.taskService.ListStatuses()
  }

  onSubmit() {
    this.taskService.CreateTask(this.taskForm.value).subscribe(newTaskResp => {
      console.log("Task Created!")
      this.router.navigate(['/tasks'])
    })
  }
  
}
