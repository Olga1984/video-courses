import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDurationComponent } from './app-duration.component';

describe('AppDurationComponent', () => {
  let component: AppDurationComponent;
  let fixture: ComponentFixture<AppDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
