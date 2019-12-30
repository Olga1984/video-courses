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
        default:
            return state;
    }
}

export const appReducers = {
    courses: coursesReducer
};
