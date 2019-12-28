import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  public subs: Subscription;
  public subsSearch: Subscription;
  public subsLoad: Subscription;
  public subsUpdate: Subscription;
  public subsRemove: Subscription;
  public courseList: Array<Course>;
  public coursesCount: number = 3;
  public loading: boolean = true;
  public keyUp = new Subject<KeyboardEvent>();

  constructor(
      private router: Router,
      private httpClient: HttpClient,
      private coursesService: CoursesService) {}

  public ngOnInit(): void {
     this.searhChanges();
     this.subs = this.coursesService.getList(0, this.coursesCount).subscribe((items: Array<Course>) => {
          this.courseList = items;
          this.loading = false;
      });
  }
  public searhChanges(): void {
      this.subsSearch = this.keyUp.pipe(
          map((event: any) => {
              return event.target.value; }),
          filter((res) => res.length > 2),
          debounceTime(1000),
          distinctUntilChanged()
      ).subscribe((text: string) => {
          this.coursesService.searchGetCall(text, 0, this.coursesCount).subscribe((res) => {
              this.courseList = res;
          }, (err) => {});
      });
  }

  public updateList(): void {
      this.subsUpdate = this.coursesService.getList(0, this.coursesCount).subscribe((data) => {
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
        this.subsLoad = this.coursesService.getList(0, this.coursesCount).subscribe((data) => {
            this.courseList = data;
            this.loading = false;
        });
  }

    public reRouteToCreatePage(): void {
        this.router.navigate(['courses/', 'new' ]);
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
        if (this.subsSearch) {
            this.subsSearch.unsubscribe();
        }
  }
}
