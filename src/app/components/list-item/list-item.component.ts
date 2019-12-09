import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
    @Input()
    public course: ICourse;
    @Output()
    public deleted: EventEmitter<string> = new EventEmitter();
    public creationDate: string;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.creationDate = this.course.creationDate;
    }

    public deleteCourse(id: string): void {
        this.deleted.emit(id);
    }

    public reRoute(id: string): void {
        this.router.navigate(['courses/', id ]);
    }
}
