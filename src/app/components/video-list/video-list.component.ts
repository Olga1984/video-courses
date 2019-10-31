import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

// @ts-ignore
import { CoursesList } from '../../constants/courses-list';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public courseList: Array<ICourse>;

  ngOnInit(): void {
    this.courseList = CoursesList;
  }
  public showCourse(event: any): void {
      console.log(event, 'course id in video courses component');
  }
}
