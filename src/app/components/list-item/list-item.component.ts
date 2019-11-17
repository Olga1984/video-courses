import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  public course: ICourse;
  @Output()
  public deleted: EventEmitter<string> = new EventEmitter();

  public creationDate: string;

  public deleteCourse(): void {
    this.deleted.emit(this.course.id);
  }
  ngOnInit(): void {
      this.creationDate = this.course.creationDate;
  }
}
