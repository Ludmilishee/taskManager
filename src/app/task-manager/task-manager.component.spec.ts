import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerComponent } from './task-manager.component';
import { ToggleButtonComponent } from '../ui/tm-toggle-button/tm-toggle-button.component';
import { TableComponent } from '../ui/tm-table/tm-table.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskManagerComponent,
        ToggleButtonComponent,
        TableComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
