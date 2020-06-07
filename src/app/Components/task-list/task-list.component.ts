import { Component, OnInit } from '@angular/core';
import {TaskService } from "../../services/task.service";
import { Task} from "../../models/Task";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {//recbimos las tareas para mostrarlas en la lista de tareas
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

}
