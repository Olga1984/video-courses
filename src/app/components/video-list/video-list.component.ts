import { Component, OnInit } from '@angular/core';
import {Course} from '../../interfaces/course';
// @ts-ignore
import { CoursesList } from '../../constants/courses-list';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public courseList: Array<Course>;

  ngOnInit(): void {
    this.courseList = CoursesList;
  }
}
