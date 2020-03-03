import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmToggleButtonComponent } from './tm-toggle-button.component';

describe('TmToggleButtonComponent', () => {
  let component: TmToggleButtonComponent;
  let fixture: ComponentFixture<TmToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
