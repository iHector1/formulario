import { Injectable } from '@angular/core';
import { Task}from '../models/Task';@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[];
  constructor() { 
    this.task = [
      /*{
        title: "escribir", description: "tengo que escribir",
        hide: true
      }*/
    ];
  }
  getTasks() { //recibimos las rareas si esta bacio lo enivamos, si ya tineen tareas lo agregamos al localStorage
    if (localStorage.getItem("tareas") == null) { return this.task; }
    else { 
      this.task = JSON.parse(localStorage.getItem("tareas"));
      return this.task;
    }
  }
  addTask(tasks: Task) {//agregamso las tareas las tareas al localstorage
    this.task.push(tasks);
    let task :Task[]= []; 
    if (localStorage.getItem("tareas") == null) {
      task.push(tasks);
      localStorage.setItem("tareas", JSON.stringify(task));
      this.task.push(tasks);
    } else { 
      task = JSON.parse(localStorage.getItem("tareas"));
      task.push(tasks);
      localStorage.setItem("tareas", JSON.stringify(task));
    }

    return false;
  }
  deleteTask(tasks: Task) {//eliminamos la tarea
    for (let i = 0; i < this.task.length; i++) {
      if (tasks == this.task[i]) { 
        this.task.splice(i, 1);
        localStorage.setItem("tareas", JSON.stringify(this.task));

      }

    }

  }
}
