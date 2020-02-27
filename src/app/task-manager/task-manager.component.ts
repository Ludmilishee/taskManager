import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasksData: Task[];

  ngOnInit() {
    this.tasksService.getTaskListData().subscribe(
      (data: { taskList: Task[] }) => this.tasksData = data.taskList
    );
  }

}
