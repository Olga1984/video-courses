import { AppAction, AppActionType } from './app.actions';
import { CoursesState, initialCoursesState } from './app.state';

export function coursesReducer(state: CoursesState = initialCoursesState, action: AppAction): CoursesState {
    switch (action.type) {
        case AppActionType.LoadCourses:
            return {
                ...state,
                loading: true
            };
        case AppActionType.SearchCourses:
            return {
                ...state,
                searchText: action.payload
            };
        case AppActionType.CoursesLoadFail:
            return {
                ...state,
                loading: false,
                error: true
            };
        case AppActionType.CoursesLoadSuccess:
            return {
                ...state,
                loading: false,
                coursesList: action.payload
            };
        case AppActionType.CoursesSetCount:
            return {
                ...state,
                count: action.payload
            };
        case AppActionType.CoursesSave:
            return {
                ...state,
                formValue: action.payload.formValue
            };
        case AppActionType.CoursesUpdate:
            return {
                ...state,
                courseUpdateId: action.payload.courseUpdateId,
                formValue: action.payload.formValue
            };
        case AppActionType.SetRemoveCourseId:
            return {
                ...state,
                removedId: action.payload
            };
        case AppActionType.RemoveCourseById:
            return {
                ...state,
                loading: false
            };
        case AppActionType.SelectAuthor:
            return {
                ...state,
                selectedAuthor: action.options ? { ...action.options } : null
            };
        case AppActionType.LoadAuthors:
            return {
                ...state,
                areAuthorsLoading: true
            };
        case AppActionType.AuthorsLoaded:
            return {
                ...state,
                areAuthorsLoading: false,
                authors: action.options.map((service) => ({ ...service }))
            };
        default:
            return state;
    }
}

export const appReducers = {
    courses: coursesReducer
};
