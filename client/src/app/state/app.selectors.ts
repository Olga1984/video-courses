import { createSelector } from '@ngrx/store';
import { AppState, CoursesState } from './app.state';

// courses
export const coursesfeatureSelector = (state: AppState) => state.courses;
export const selectSearchText = createSelector(coursesfeatureSelector, (state: CoursesState) => state.searchText);
export const selectPage = createSelector(coursesfeatureSelector, (state: CoursesState) => state.page);
export const selectCount = createSelector(coursesfeatureSelector, (state: CoursesState) => state.count);
export const selectCoursesList = createSelector(coursesfeatureSelector, (state: CoursesState) => state.coursesList);
export const selectLoading = createSelector(coursesfeatureSelector, (state: CoursesState) => state.loading);
export const selectRemovedId = createSelector(coursesfeatureSelector, (state: CoursesState) => state.removedId);
export const selectCoursesParameters = createSelector(
    selectSearchText,
    selectPage,
    selectCount,
    (text, page, count) => ({text,  page, count })
);
