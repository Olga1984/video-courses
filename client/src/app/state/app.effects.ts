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
import { selectCoursesParameters, selectRemovedId } from './app.selectors';
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

    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private coursesService: CoursesService
    ) {}
}
