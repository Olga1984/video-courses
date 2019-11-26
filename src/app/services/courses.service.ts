import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/course';
export const coursesList =  [
    {
        id: '2',
        title: 'ahere can I get some',
        creationDate: '11/24/2019',
        duration: 8,
        topRated: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        id: '0',
        title: 'bhat is Lorem Ipsum',
        creationDate: '07/30/2019',
        duration: 30,
        topRated: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        id: '1',
        title: 'chere does it come from',
        creationDate: '10/30/2019',
        duration: 60,
        topRated: true,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        id: '3',
        title: 'dhere can I get some',
        creationDate: '12/09/2019',
        duration: 90,
        topRated: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    }
];
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    public courses:  Array<ICourse> = coursesList;
    public getList(): Array<ICourse> {
        return this.courses;
    }
    public createCourse(newItem: ICourse): Array<ICourse> {
        this.courses.push(newItem);
        return coursesList;
    }
    public getCourse(id: string): ICourse {
        const course = this.courses.filter((x) => x.id === id);
        return course[0];
    }
    public updateCourse(id, newItem: ICourse): Array<ICourse> {
        coursesList.forEach((element, index) => {
            if (element.id === newItem.id) {
                coursesList[index] = newItem;
            }
        });
        return coursesList;
    }
    public removeCourse(id: string): Array<ICourse> {
        this.courses = coursesList.filter((item) => item.id !== id);
        return this.courses;
    }
}