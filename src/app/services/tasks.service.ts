import { Injectable } from '@angular/core';
import { interval, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  getTaskListData() {
    return interval(3000)
      .pipe(
        flatMap(
          () => of({ taskList: this.generateFakeData() } as { taskList: Task[] })
        )
      );
  }

  private generateFakeData(count: number = 10) {
    const names = [
      'chrome.exe', 'webstorm.exe', 'node.exe', 'avp.exe', 'cmd.exe', 'acrotray.exe ', 'csrss.exe ', 'iexplore.exe',
      'explorer.exe', 'services.exe', 'svchost.exe', 'taskmgr.exe', 'winword.exe', 'wdfmgr.exe', 'winlogon.exe'
    ];
    const data = [];

    for (let i = 0; i < count; i++) {
      data.push({
        name: names[i] || `task${i}.exe`,
        cpu: this.getRandomNumber(0, 7),
        memory: this.getRandomNumber(10, 2700),
        disk: this.getRandomNumber(0.1, 10),
        network: this.getRandomNumber(0.1, 10)
      });
    }

    return data;
  }

  private getRandomNumber(min: number, max: number) {
    const result = Math.random() * (max - min) + min;

    return Number(result.toFixed(2));
  }
}
