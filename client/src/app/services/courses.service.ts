import {Injectable} from '@angular/core';
import { ICourse } from '../interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    public courses: Array<ICourse>;
    constructor(
        private httpClient: HttpClient) {
    }
    public getList(page: number, amount: number): Observable<ICourse[]> {
        return this.httpClient.get<ICourse[]>(`http://localhost:3004/courses?start=${page}&count=${amount}`)
    }
    public getCourse(id: string):Observable<ICourse>{
        return this.httpClient.get<ICourse>(`http://localhost:3004/courses/${id}`);
    }
    public removeCourse(id: string): Observable<any> {
        return this.httpClient.delete<ICourse>(`http://localhost:3004/courses/${id}`);
    }
    public createCourse(newItem: ICourse): Observable<ICourse> {
        return this.httpClient.post<ICourse>(`http://localhost:3004/courses/`, newItem);
    }
    public updateCourse(id, newItem: ICourse): Observable<ICourse> {
        return this.httpClient.put<ICourse>(`http://localhost:3004/courses/${id}`, newItem);
    }

}
