import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() data: Task[];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  private initialPos: number;
  private tableLine: any;

  onResizeStart(event) {
    console.log(event);
    console.log(event.target.parentElement.offsetWidth);
    console.log(event.clientX);
    this.initialPos = event.offsetX;
    // this.tableLine = document.createElement('div');
    // this.renderer.setStyle(this.tableLine, 'height', event.target.closest('table').offsetHeight + 'px');
    // this.renderer.setStyle(this.tableLine, 'width', '2px');
    // this.renderer.setStyle(this.tableLine, 'background', 'red');
    // event.target.parentElement.parentElement.parentElement.appendChild(this.tableLine);
    // event.dataTransfer.setDragImage(this.tableLine, 0, 0);
  }

  onResizeEnd(event) {
    const delta = event.offsetX - this.initialPos;
    let currentElWidth = event.target.closest('tr').offsetWidth + delta;
    let nextElWidth = event.target.closest('tr').nextSibling.offsetWidth - delta;
    const maxAvailableWidth = currentElWidth + nextElWidth - 100;

    if (currentElWidth > maxAvailableWidth) {
      currentElWidth = maxAvailableWidth;
      nextElWidth = 100;
    }
    console.log(delta);
    console.log(currentElWidth);
    console.log(nextElWidth);

    this.renderer.setStyle(event.target.parentElement, 'width', currentElWidth + 'px');
    this.renderer.setStyle(event.target.parentElement.nextSibling, 'width', nextElWidth + 'px');

    this.tableLine.remove();
  }
}
