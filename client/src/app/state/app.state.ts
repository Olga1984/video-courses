import { Course } from '../interfaces/course';

export interface AppState {
    courses: CoursesState;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface CoursesState {
    loading: boolean;
    error: boolean;
    coursesList: Array<Course>;
    searchText: string;
    page: number;
    count: number;
    removedId: string;
}

export const initialCoursesState: CoursesState = {
    error: false,
    loading: false,
    coursesList: null,
    searchText: '',
    page: 0,
    count: 4,
    removedId: ''
};

export const initialAppState: AppState = {
    courses: initialCoursesState
};
