import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tm-toggle-button',
  templateUrl: './tm-toggle-button.component.html',
  styleUrls: ['./tm-toggle-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent implements OnInit {

  @Input() checked: boolean;

  @Output() changeState = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.checked = !this.checked;
    this.changeState.emit(this.checked);
  }
}
