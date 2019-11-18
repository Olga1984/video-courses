import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { ICourse } from '../../interfaces/course';

// @ts-ignore
import { CoursesList } from '../../constants/courses-list';
import { FindCoursePipe } from '../../pipes/find-course.pipe';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [FindCoursePipe]
})
export class VideoListComponent implements OnInit, OnChanges {
  @Input() search: string;
  public courseList: Array<ICourse>;
  constructor(private filterPipe: FindCoursePipe) {
  }

  ngOnInit(): void {
    this.courseList = CoursesList;
  }
  public showCourse(event: string): void {
      console.log(event, 'course id in video courses component');
  }

  ngOnChanges(): void {
        this.courseList = this.filterPipe.transform(CoursesList, this.search);
  }
}
