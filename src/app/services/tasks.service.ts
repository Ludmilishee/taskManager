import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  getTaskListData() {
    return timer(0, 3000)
      .pipe(
        switchMap(
          () => of({ taskList: this.generateFakeData() } as { taskList: Task[] })
        )
      );
  }

  private generateFakeData(count = 25) {
    const names = [
      'chrome.exe', 'webstorm.exe', 'node.exe', 'avp.exe', 'cmd.exe', 'acrotray.exe ', 'csrss.exe ', 'iexplore.exe',
      'explorer.exe', 'services.exe', 'svchost.exe', 'taskmgr.exe', 'winword.exe', 'wdfmgr.exe', 'winlogon.exe'
    ];
    const states = [ 'Выполняется', 'Приостановлено', 'Не отвечает' ];
    const users = [ 'lyudmila', 'СИСТЕМА' ];
    const data = [];

    for (let i = 0; i < count; i++) {
      data.push({
        name: names[i] || `task${i}.exe`,
        id: this.getRandomNumber(1, 1000),
        state: states[this.getRandomNumber(0, 2)],
        user: users[this.getRandomNumber(0, 1)],
        cpu: this.getRandomNumber(0, 7, 2),
        memory: this.getRandomNumber(1, 40, 2),
        disk: this.getRandomNumber(2000, 20000)
      });
    }

    return data;
  }

  private getRandomNumber(min: number, max: number, digits = 0) {
    const result = Math.random() * (max - min) + min;

    return Number(result.toFixed(digits));
  }
}
