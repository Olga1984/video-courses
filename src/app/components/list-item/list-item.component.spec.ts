import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { ICourse } from '../../interfaces/course';
import { Component } from '@angular/core';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  const course: ICourse = {
      id: '1',
      title: 'hello',
      creationDate: 'tests',
      duration: 1,
      description: 'test'
  };
  const courseList = [{
        id: '0',
        title: 'What is Lorem Ipsum',
        creationDate: '21.02.2019',
        duration: 30,
        description: 'Lorem Ipsum is Ipsum'
    }];

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ListItemComponent,
          TestHostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('raises the deleted event when clicked', () => {
        component.deleted.subscribe((deleted: string) => expect(deleted).toBe(course.id));
        component.deleteCourse();
    });

  it('should show course', () => {
        testHostComponent.setInput(courseList);
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('div.header-items').innerText).toEqual('What is Lorem Ipsum');
    });

  @Component({
        selector: `app-host-component`,
        template: `<app-list-item
                  *ngFor="let item of courseList"
                  [course]="item">
                  </app-list-item>`
    })
    class TestHostComponent {
        public courseList: Array<ICourse>;

        public setInput(newInput: Array<ICourse>): void {
            this.courseList = newInput;
        }
    }
});
