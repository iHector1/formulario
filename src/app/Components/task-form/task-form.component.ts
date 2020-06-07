import { Component, OnInit } from '@angular/core';
import { TaskService} from "../../services/task.service";
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }
  addTask(newTitulo: HTMLInputElement
    , newArea: HTMLInputElement) { // los dos campos de html y los agremagos al arreglo de tareas
    this.taskService.addTask({
      title: newTitulo.value,
      description: newArea.value,
      hide: true
    })
    newTitulo.value = "";//vaciasmos el regirtro
    newArea.value = "";
    newTitulo.focus;//enfocamos el cursor en el campo de titulo

    return false;
  }
}
