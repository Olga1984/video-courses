import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-item',
  template: ''
})
export class ListItemComponentStub {
  @Input()
  public course: ICourse;
  @Output()
  public deleted = new EventEmitter<string>();
}
