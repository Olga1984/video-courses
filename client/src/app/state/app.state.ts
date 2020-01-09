import { Course } from '../interfaces/course';
import { Author } from '../interfaces/author';

export interface AppState {
    courses: CoursesState;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface FormValues {
    courseUpdateId: string;
    formValue: any;
}

export interface CoursesState {
    loading: boolean;
    error: boolean;
    coursesList: Array<Course>;
    searchText: string;
    page: number;
    count: number;
    removedId: string;
    courseUpdateId: string;
    formValue: any;
    selectedAuthor: Author;
    authors: Array<Author>;
    areAuthorsLoading: boolean;
}

export const initialCoursesState: CoursesState = {
    error: false,
    loading: false,
    coursesList: null,
    searchText: '',
    page: 0,
    count: 4,
    removedId: '',
    courseUpdateId: '',
    formValue: null,
    selectedAuthor: null,
    authors: [],
    areAuthorsLoading: false
};

export const initialAppState: AppState = {
    courses: initialCoursesState
};
