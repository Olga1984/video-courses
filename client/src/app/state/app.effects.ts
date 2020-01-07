import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
    catchError,
    map,
    switchMap,
    withLatestFrom
} from 'rxjs/operators';

import {
    AppAction,
    AppActionType,
    CoursesLoadFailAction,
    CoursesLoadSuccessAction, LoadCoursesAction
} from './app.actions';
import { selectCoursesParameters, selectFormValue, selectRemovedId } from './app.selectors';
import { AppState } from './app.state';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class AppEffects {
    @Effect()
    loadCourses =
        this.actions$.pipe(
            ofType<AppAction>(AppActionType.LoadCourses),
            withLatestFrom(this.store$.pipe(select(selectCoursesParameters))),
            switchMap(([, params]) => this.coursesService.getList(params.text, params.page, params.count)),
            map((result) => {
                return new CoursesLoadSuccessAction(result);
            }),
            catchError((error) => of(new CoursesLoadFailAction()))
        );

    @Effect()
    removeCourseByIdAction =
        this.actions$.pipe(
            ofType<AppAction>(AppActionType.RemoveCourseById),
            withLatestFrom(this.store$.pipe(select(selectRemovedId))),
            switchMap(([, id]) => {
                if (id) {
                    return of(this.coursesService.removeCourse(id));
                }
            }),
            map((result) => {
                return new LoadCoursesAction();
            }),
            catchError((error) => of(new CoursesLoadFailAction()))
        );

    @Effect({dispatch: false})
    updateCourseByIdAction =
        this.actions$.pipe(
            ofType<AppAction>(AppActionType.CoursesUpdate),
            map((payload) => {
                console.log(payload);
                if (payload) {
                    // @ts-ignore
                    return this.coursesService.updateCourse(payload.courseUpdateId, payload.formValue);
                }
            })
        );

    @Effect({dispatch: false})
    saveCourseAction =
        this.actions$.pipe(
            ofType<AppAction>(AppActionType.CoursesSave),
            withLatestFrom(this.store$.pipe(select(selectFormValue))),
            switchMap(([, val]) => {
                if (val) {
                    return of(this.coursesService.createCourse(val.formValue));
                }
            })
        );

    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private coursesService: CoursesService
    ) {}
}
