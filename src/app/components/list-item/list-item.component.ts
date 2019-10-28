import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input()
  public course: Course;
  @Output()
  public deleted = new EventEmitter<string>();

  deleteCourse(): void {
    this.deleted.emit(this.course.id);
  }
}
