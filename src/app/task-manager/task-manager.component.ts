import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { TableColumnHeader } from '../models/tableData.model';
import { ReplaySubject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit, OnDestroy {

  private unSubscriber$: ReplaySubject<any> = new ReplaySubject<any>(2);
  private taskDataSubscription;

  constructor(private tasksService: TasksService) { }

  tasksData: Task[];
  colHeaders: TableColumnHeader[] = [
    { field: 'name', header: 'Имя' },
    { field: 'cpu', header: 'ЦП' },
    { field: 'memory', header: 'Паямть' },
    { field: 'disk', header: 'Диск' },
    { field: 'network', header: 'Сеть' }
  ];

  private switchAutoUpdate(checked = true) {
    if (checked) {
      this.taskDataSubscription = this.tasksService
        .getTaskListData()
        .pipe(takeUntil(this.unSubscriber$))
        .subscribe(
          (data: { taskList: Task[] }) => { this.tasksData = data.taskList; console.log(this.tasksData); }
        );
    } else {
      this.taskDataSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.switchAutoUpdate();
  }

  ngOnDestroy() {
    this.unSubscriber$.next(null);
    this.unSubscriber$.complete();
  }
}
