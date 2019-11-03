import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input()
  public course: ICourse;
  @Output()
  public deleted = new EventEmitter<string>();

  public deleteCourse(): void {
    this.deleted.emit(this.course.id);
  }
}
