import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-list-item',
  template: ''
})
export class ListItemComponentStub {
  @Input()
  public course: Course;
  @Output()
  public deleted = new EventEmitter<string>();
}
