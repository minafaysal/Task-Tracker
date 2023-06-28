import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManegmantComponent } from './task-manegmant.component';

describe('TaskManegmantComponent', () => {
  let component: TaskManegmantComponent;
  let fixture: ComponentFixture<TaskManegmantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManegmantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManegmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
