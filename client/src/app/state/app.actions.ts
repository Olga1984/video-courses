import { Action } from '@ngrx/store';
import { Course } from '../interfaces/course';
import { Author } from '../interfaces/author';

export enum AppActionType {
    LoadCourses = '[app] LoadCourses',
    SearchCourses = '[app] SearchCourses',
    CoursesLoadFail = '[app] CoursesLoadFail',
    CoursesLoadSuccess = '[app] CoursesLoadSuccess',
    CoursesSetCount = '[app] CoursesSetCount',
    CoursesSave = '[app] CoursesSave',
    CoursesUpdate = '[app] CoursesUpdate',
    RemoveCourseById = '[app] RemoveCourseById',
    SetRemoveCourseId = '[app] SetRemoveCourseId',
    LoginUser = '[app] LoginUser',
    UserLogout = '[app] UserLogout',
    UserLoadSuccess = '[app] UserLoadSuccess',
    SetCreadentials = '[app] SetCreadentials',
    SelectAuthor = '[app] SelectAuthor',
    LoadAuthors = '[app] LoadAuthorsAction',
    AuthorsLoaded = '[app] AuthorsLoadedAction'
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

export class CoursesLoadFailAction implements Action {
    readonly type = AppActionType.CoursesLoadFail;
}

export class CoursesLoadSuccessAction implements Action {
    readonly type = AppActionType.CoursesLoadSuccess;

    constructor(
        public payload: Array<Course>
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
export class CoursesSaveAction implements Action {
    readonly type = AppActionType.CoursesSave;

    constructor(
        public payload: any
    ) { }
}
export class CoursesUpdateAction implements Action {
    readonly type = AppActionType.CoursesUpdate;

    constructor(
        public payload: any
    ) { }
}
export class SelectAuthor implements Action {
    readonly type = AppActionType.SelectAuthor;

    constructor(public options: Author) { }
}

export class LoadAuthorsAction implements Action {
    readonly type = AppActionType.LoadAuthors;

    constructor() { }
}

export class AuthorsLoadedAction implements Action {
    readonly type = AppActionType.AuthorsLoaded;

    constructor(public options: Array<Author>) { }
}

export type AppAction = LoadCoursesAction |
    CoursesLoadFailAction |
    CoursesLoadSuccessAction |
    CoursesSetCountAction |
    RemoveCourseByIdAction |
    SetRemoveCourseIdAction |
    SearchCoursesAction |
    CoursesSaveAction |
    CoursesUpdateAction |
    SelectAuthor |
    LoadAuthorsAction |
    AuthorsLoadedAction;
