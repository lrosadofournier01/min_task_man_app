import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { StatusEnum } from '../models/status-enum';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  
  baseApiUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) {}

  ListStatuses():Observable<StatusEnum[]> {
    return this.http.get<StatusEnum[]>(this.baseApiUrl + '/tasks/statuses')
  }

  ListTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseApiUrl + '/tasks')
  }

  FindSingleTask(id: any): Observable<Task> {
    return this.http.get<Task>(this.baseApiUrl + '/tasks/' + id);
  }

  CreateTask(data: any) {
    return this.http.post(this.baseApiUrl + '/tasks', data)
  }

  DeleteTask(id: any) {
    return this.http.delete(this.baseApiUrl + '/tasks/' + id)
  }

  EditTask(id: any, data: any) {
    return this.http.put(this.baseApiUrl + '/tasks/' + id, data)
  }
  
}
