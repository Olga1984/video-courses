import { createSelector } from '@ngrx/store';
import { AppState, CoursesState } from './app.state';

// courses
export const coursesfeatureSelector = (state: AppState) => state.courses;
export const selectSearchText = createSelector(coursesfeatureSelector, (state: CoursesState) => state.searchText);
export const selectPage = createSelector(coursesfeatureSelector, (state: CoursesState) => state.page);
export const selectCount = createSelector(coursesfeatureSelector, (state: CoursesState) => state.count);
export const selectCourseUpdateId = createSelector(coursesfeatureSelector, (state: CoursesState) => state.courseUpdateId);
export const selectFormValue = createSelector(coursesfeatureSelector, (state: CoursesState) => state.formValue);
export const selectCoursesList = createSelector(coursesfeatureSelector, (state: CoursesState) => state.coursesList);
export const selectLoading = createSelector(coursesfeatureSelector, (state: CoursesState) => state.loading);
export const selectRemovedId = createSelector(coursesfeatureSelector, (state: CoursesState) => state.removedId);
export const selectCoursesParameters = createSelector(
    selectSearchText,
    selectPage,
    selectCount,
    (text, page, count) => ({text,  page, count })
);
export const selectFormParameters = createSelector(
    selectCourseUpdateId,
    selectFormValue,
    (id, val) => ({id, val})
);
export const selectSelectedAuthor = createSelector(coursesfeatureSelector, (state: CoursesState) => state.selectedAuthor);
export const selectAuthors = createSelector(coursesfeatureSelector, (state: CoursesState) => state.authors);
export const selectAuthorsLoading = createSelector(coursesfeatureSelector, (state: CoursesState) => state.areAuthorsLoading);
