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

  onResizeStart(event) {
    console.log(event);
    console.log(event.target.parentElement.offsetWidth);
    this.initialPos = event.clientX;
  }

  onResizeEnd(event) {
    // console.log(event);
    // console.log(event.target.parentElement.offsetWidth);
    // console.log(event.offsetX);
    // console.log(event.target.parentElement.nextSibling);
    // const delta = event.offsetX;
    console.log(event);
    const delta = event.clientX - this.initialPos;
    const commonWidth = event.target.parentElement.offsetWidth + event.target.parentElement.nextSibling.offsetWidth - 2;
    console.log(delta);
    console.log(event.target.parentElement.offsetWidth + delta - 2);
    this.renderer.setStyle(event.target.parentElement, 'width',
      event.target.parentElement.offsetWidth + delta - 2 + 'px');
    console.log(commonWidth - event.target.parentElement.offsetWidth);
    this.renderer.setStyle(event.target.parentElement.nextSibling, 'width',
      commonWidth - event.target.parentElement.offsetWidth + 'px');
    // this.renderer.setStyle(event.target.parentElement.nextSibling, 'width',
    //     //   event.target.parentElement.nextSibling.offsetWidth - delta - 2 + 'px');
  }
}
