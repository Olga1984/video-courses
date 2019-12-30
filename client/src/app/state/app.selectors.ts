import { createSelector } from '@ngrx/store';
import { AppState, CoursesState } from './app.state';

export const featureSelector = (state: AppState) => state.courses;
export const selectSearchText = createSelector(featureSelector, (state: CoursesState) => state.searchText);
export const selectPage = createSelector(featureSelector, (state: CoursesState) => state.page);
export const selectCount = createSelector(featureSelector, (state: CoursesState) => state.count);
export const selectCoursesList = createSelector(featureSelector, (state: CoursesState) => state.coursesList);
export const selectLoading = createSelector(featureSelector, (state: CoursesState) => state.loading);
export const selectRemovedId = createSelector(featureSelector, (state: CoursesState) => state.removedId);
export const selectCoursesParameters = createSelector(
    selectSearchText,
    selectPage,
    selectCount,
    (text, page, count) => ({text,  page, count })
);
