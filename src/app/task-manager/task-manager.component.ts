import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { TableColumnHeader } from '../models/tableData.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasksData: Task[];
  colHeaders: TableColumnHeader[] = [
    { field: 'name', header: 'Имя' },
    { field: 'cpu', header: 'ЦП' },
    { field: 'memory', header: 'Паямть' },
    { field: 'disk', header: 'Диск' },
    { field: 'network', header: 'Сеть' }
  ];

  ngOnInit() {
    this.tasksService.getTaskListData().subscribe(
      (data: { taskList: Task[] }) => this.tasksData = data.taskList
    );

    setTimeout(() => {
      console.log( this.tasksData);
    }, 4000);
  }

}
