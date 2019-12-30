import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { AppState } from '../../state/app.state';
import {
    CoursesSetCountAction,
    LoadCoursesAction,
    RemoveCourseByIdAction, SearchCoursesAction,
    SetRemoveCourseIdAction
} from '../../state/app.actions';
import { selectCoursesList, selectLoading } from '../../state/app.selectors';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent implements OnInit, OnDestroy {

  public subsSearch: Subscription;

  public courseList: Observable<Array<Course>> = this.store$.pipe(select(selectCoursesList));
  public loading$ = this.store$.pipe(select(selectLoading));

  public coursesCount: number = 4;
  public keyUp = new Subject<KeyboardEvent>();

  constructor(
      private store$: Store<AppState>,
      private router: Router) {}

  public ngOnInit(): void {
     this.searhChanges();
     this.store$.dispatch(new LoadCoursesAction());
  }
  public searhChanges(): void {
      this.subsSearch = this.keyUp
          .pipe(
          map((event: any) => {
              return event.target.value; }),
          filter((res) => res.length > 2),
          debounceTime(1000),
          distinctUntilChanged()
      ).subscribe((text: string) => {
              this.store$.dispatch(new SearchCoursesAction(text));
              this.store$.dispatch(new LoadCoursesAction());
      });
  }

  public removeCourse(id: string): void {
      this.coursesCount -= 1;
      this.store$.dispatch(new CoursesSetCountAction(this.coursesCount));
      this.store$.dispatch(new SetRemoveCourseIdAction(id));
      this.store$.dispatch(new RemoveCourseByIdAction());
  }

    public loadCourses(): void {
        this.coursesCount += 1;
        this.store$.dispatch(new CoursesSetCountAction(this.coursesCount));
        this.store$.dispatch(new LoadCoursesAction());
  }

    public reRouteToCreatePage(): void {
        this.router.navigate(['courses/', 'new' ]);
    }

    public ngOnDestroy(): void {
        if (this.subsSearch) {
            this.subsSearch.unsubscribe();
        }
  }
}
