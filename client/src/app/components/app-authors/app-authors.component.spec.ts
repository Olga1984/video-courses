import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthorsComponent } from './app-authors.component';

describe('AppAuthorsComponent', () => {
  let component: AppAuthorsComponent;
  let fixture: ComponentFixture<AppAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
