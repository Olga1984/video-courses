import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { ICourse } from '../../interfaces/course';
import { Component } from '@angular/core';
import { BorderStyleStubDirective } from '../../directives/border-style/border-style.directive. stub';
import { DurationPipeStub } from '../../pipes/duration.pipe.stub';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  const course: ICourse = {
      id: '1',
      title: 'hello',
      creationDate: `${new Date()}`,
      duration: 1,
      topRated: true,
      description: 'test'
  };
  const courseList = [{
        id: '0',
        title: 'What',
        creationDate: `${new Date()}`,
        duration: 30,
        topRated: false,
        description: 'Lorem Ipsum is Ipsum'
    }];

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ListItemComponent,
          TestHostComponent,
          BorderStyleStubDirective,
          DurationPipeStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    component.creationDate = '11/08/2019';
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
        component.deleteCourse('1');
    });

  it('should show correct upercased course title', () => {
        testHostComponent.setInput(courseList);
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('div.header-items').innerText).toEqual('WHAT');
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
