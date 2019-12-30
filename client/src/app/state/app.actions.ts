import { Action } from '@ngrx/store';

export enum AppActionType {
    LoadCourses = '[app] LoadCourses',
    SearchCourses = '[app] SearchCourses',
    CoursesLoadFail = '[app] CoursesLoadFail',
    CoursesLoadSuccess = '[app] CoursesLoadSuccess',
    CoursesSetCount = '[app] CoursesSetCount',
    RemoveCourseById = '[app] RemoveCourseById',
    SetRemoveCourseId = '[app] SetRemoveCourseId'
}

export class CoursesLoadFailAction implements Action {
    readonly type = AppActionType.CoursesLoadFail;
}

export class LoadCoursesAction implements Action {
    readonly type = AppActionType.LoadCourses;
}

export class SearchCoursesAction implements Action {
    readonly type = AppActionType.SearchCourses;
    constructor(
        public payload: string
    ) {}
}

export class CoursesLoadSuccessAction implements Action {
    readonly type = AppActionType.CoursesLoadSuccess;

    constructor(
        public payload: any
    ) { }
}
export class CoursesSetCountAction implements Action {
    readonly type = AppActionType.CoursesSetCount;

    constructor(
        public payload: number
    ) { }
}
export class RemoveCourseByIdAction implements Action {
    readonly type = AppActionType.RemoveCourseById;
}

export class SetRemoveCourseIdAction implements Action {
    readonly type = AppActionType.SetRemoveCourseId;

    constructor(
        public payload: string
    ) {}
}

export type AppAction = LoadCoursesAction |
    CoursesLoadFailAction |
    CoursesLoadSuccessAction |
    CoursesSetCountAction |
    RemoveCourseByIdAction |
    SetRemoveCourseIdAction |
    SearchCoursesAction;
