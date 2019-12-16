import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import { ICourse } from '../../interfaces/course';
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
  public coursesCount: number = 4;

  constructor(
      private coursesService: CoursesService,
      private filterPipe: FindCoursePipe,
      private cdRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.coursesService.getList(this.coursesCount).subscribe((items: ICourse[]) => {
        this.courseList = items;
        this.cdRef.markForCheck();
    });
  }
  public updateList(): void {
      this.coursesService.getList(this.coursesCount).subscribe(data => {
            this.courseList = data;
        })
    }
  public removeCourse(id: string): void {
      this.coursesService.removeCourse(id).subscribe();
      this.updateList();
      window.location.reload();
  }
    public loadCourses(): void {
        this.coursesCount += 4;
        this.coursesService.getList(this.coursesCount).subscribe(data => {
            this.courseList = data;
        })
  }

  ngOnChanges(): void {
        // this.courseList = this.filterPipe.transform(this.coursesService.getList(), this.search);
  }
}
