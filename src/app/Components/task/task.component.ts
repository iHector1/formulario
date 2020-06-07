import { Component, OnInit ,Input} from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService} from "../../services/task.service"
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
  }
  deleteTask(task: Task) {//confirmacion de que quiere el mimanr el item
    if (confirm("estas seguro de querer eliminarlo?")) { 
        this.taskService.deleteTask(task);
    }
    

  }
}
