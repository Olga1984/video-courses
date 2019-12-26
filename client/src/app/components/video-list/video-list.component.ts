import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent implements OnInit, OnDestroy {
  @Input() search: Array<Course>;

  public subs: Subscription;
  public subsLoad: Subscription;
  public subsUpdate: Subscription;
  public subsRemove: Subscription;
  public courseList: Array<Course>;
  public coursesCount: number = 3;
  public page: number = 0;
  public loading: boolean = true;

  constructor(
      private coursesService: CoursesService) {
  }
  public ngOnInit(): void {
      console.log(this.search);
      if (this.search.length) {
          this.courseList = this.search;
      } else {
          this.subs = this.coursesService.getList(this.page, this.coursesCount).subscribe((items: Array<Course>) => {
          this.courseList = items;
          this.loading = false;
      });
      }
  }
  public updateList(): void {
      this.subsUpdate = this.coursesService.getList(this.page, this.coursesCount).subscribe((data) => {
          this.courseList = data;
          this.loading = false;
        });
    }
  public removeCourse(id: string): void {
      this.loading = true;
      this.subsRemove = this.coursesService.removeCourse(id).subscribe();
      this.updateList();
  }
    public loadCourses(): void {
        this.loading = true;
        this.coursesCount += 1;
        this.subsLoad = this.coursesService.getList(this.page, this.coursesCount).subscribe((data) => {
            this.courseList = data;
            this.loading = false;
        });
  }
    public ngOnDestroy(): void {
        if (this.subs) {
            this.subs.unsubscribe();
        }
        if (this.subsUpdate) {
            this.subsUpdate.unsubscribe();
        }
        if (this.subsRemove) {
            this.subsRemove.unsubscribe();
        }
        if (this.subsLoad) {
            this.subsLoad.unsubscribe();
        }
  }
}
