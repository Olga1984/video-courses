import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

// @ts-ignore
import { FindCoursePipe } from '../../pipes/find-course.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [FindCoursePipe]
})
export class VideoListComponent implements OnInit, OnChanges {
  @Input() search: string;
  public courseList: Array<ICourse>;
  constructor(private coursesService: CoursesService, private filterPipe: FindCoursePipe) {
  }

  ngOnInit(): void {
    this.courseList = this.coursesService.getList();
  }
  public removeCourse(id: string): void {
      const agrement = prompt('Do you really want to delete this course?');
      if (agrement) {
          this.courseList = this.coursesService.removeCourse(id);
      }
  }

  ngOnChanges(): void {
        this.courseList = this.filterPipe.transform(this.coursesService.getList(), this.search);
  }
}
