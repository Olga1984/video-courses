import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { FindCoursePipe } from '../../pipes/find-course.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FindCoursePipe]
})
export class VideoListComponent implements OnInit {
  @Input() search: Array<ICourse>;
  public courseList: Array<ICourse>;
  public coursesCount: number = 3;
  public page: number = 0;
  public loading: boolean = true;

  constructor(
      private coursesService: CoursesService,
      private filterPipe: FindCoursePipe,
      private cdRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
      if (this.search.length) {
          this.courseList = this.search;
      } else {
          this.coursesService.getList(this.page, this.coursesCount).subscribe((items: ICourse[]) => {
          this.courseList = items;
          this.cdRef.markForCheck();
          this.loading = false;
      });
      }
  }
  public updateList(): void {
      this.coursesService.getList(this.page, this.coursesCount).subscribe(data => {
          this.courseList = data;
          this.loading = false;
        })
    }
  public removeCourse(id: string): void {
      this.loading = true;
      this.coursesService.removeCourse(id).subscribe();
      this.updateList();
      window.location.reload();
  }
    public loadCourses(): void {
        this.loading = true;
        this.coursesCount += 1;
        this.coursesService.getList(this.page, this.coursesCount).subscribe(data => {
            this.courseList = data;
            this.loading = false;
        })
  }
}
