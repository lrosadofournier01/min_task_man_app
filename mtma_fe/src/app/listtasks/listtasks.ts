import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from '../models/task';
import { SessionService } from '../services/session-service';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-listtasks',
  imports: [ AsyncPipe, RouterLink ],
  templateUrl: './listtasks.html',
  styleUrl: './listtasks.css',
})

export class Listtasks {

  id: any;
  tasks$!: Observable<Task[]>;
  constructor(private taskService: TaskService, private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    this.tasks$ = this.taskService.ListTasks();
  }

  clickLogOut() {
    this.sessionService.DeleteSession().subscribe(delSessRsp => {
      console.log("Logged Out!")
      this.router.navigate([''])
    })
  }

  deleteTask(id: any) {
    this.taskService.DeleteTask(id).subscribe(delTaskResp => {
      console.log("Deleted Task!")
      this.router.navigate(['/tasks'])
    })
  }

}
