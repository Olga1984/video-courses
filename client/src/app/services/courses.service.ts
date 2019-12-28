import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    public courses: Array<Course>;
    constructor(
        private httpClient: HttpClient) {
    }
    public getList(page: number, amount: number): Observable<Array<Course>> {
        return this.httpClient.get<Array<Course>>(`http://localhost:3004/courses?start=${page}&count=${amount}`);
    }
    public getCourse(id: string): Observable<Course> {
        return this.httpClient.get<Course>(`http://localhost:3004/courses/${id}`);
    }
    public removeCourse(id: string): Observable<any> {
        return this.httpClient.delete<Course>(`http://localhost:3004/courses/${id}`);
    }
    public createCourse(newItem: Course): Observable<Course> {
        return this.httpClient.post<Course>(`http://localhost:3004/courses/`, newItem);
    }
    public updateCourse(id, newItem: Course): Observable<Course> {
        return this.httpClient.put<Course>(`http://localhost:3004/courses/${id}`, newItem);
    }
    public searchGetCall(text: string, page: number, count: number): any {
        if (text === '') {
            return of([]);
        }
        return this.httpClient.get<Array<Course>>(`http://localhost:3004/courses?start=${page}&count=${count}&textFragment=${text}`);
    }
}
