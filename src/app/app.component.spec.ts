import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ToggleButtonComponent } from './ui/tm-toggle-button/tm-toggle-button.component';
import { TableComponent } from './ui/tm-table/tm-table.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskManagerComponent,
        ToggleButtonComponent,
        TableComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
