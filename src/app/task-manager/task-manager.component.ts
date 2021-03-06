import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { TableColumnHeader } from '../models/tableData.model';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tm-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskManagerComponent implements OnInit, OnDestroy {

  private unSubscriber$: ReplaySubject<any> = new ReplaySubject<any>(2);
  private taskDataSubscription;

  constructor(private tasksService: TasksService, private cd: ChangeDetectorRef) { }

  tasksData: Task[];
  colHeaders: TableColumnHeader[] = [
    { field: 'name', header: 'Имя' },
    { field: 'id', header: 'ИД процесса' },
    { field: 'state', header: 'Состояние' },
    { field: 'user', header: 'Пользователь' },
    { field: 'cpu', header: 'ЦП, %' },
    { field: 'memory', header: 'ОЗУ, %' },
    { field: 'disk', header: 'Память, Кб' }
  ];

  switchAutoUpdate(checked = true) {
    if (checked) {
      this.taskDataSubscription = this.tasksService
        .getTaskListData()
        .pipe(takeUntil(this.unSubscriber$))
        .subscribe(
          (data: { taskList: Task[] }) => {
            this.tasksData = data.taskList;
            this.cd.detectChanges();
          }
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
