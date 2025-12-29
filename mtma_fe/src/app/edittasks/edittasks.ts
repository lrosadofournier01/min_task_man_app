import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StatusEnum } from '../models/status-enum';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-edittasks',
  imports: [ AsyncPipe, FormsModule, ReactiveFormsModule ],
  templateUrl: './edittasks.html',
  styleUrl: './edittasks.css',
})

export class Edittasks {

  statuses$!: Observable<StatusEnum[]>
  taskForm!: FormGroup;
  id: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('taskId'));

    this.statuses$ = this.taskService.ListStatuses()

    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      due_date: new FormControl(''),
      status: new FormControl('')
    });

    this.taskService.FindSingleTask(this.id).subscribe(currTaskResp => {
      this.taskForm.patchValue(currTaskResp);
    })
  }

  onSubmit() {
    this.taskService.EditTask(this.id, this.taskForm.value).subscribe(editTaskResp => {
        console.log("Task Updated!")
        this.router.navigate(['/tasks'])
      }
    )
  }

}
