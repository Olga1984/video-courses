import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { FormControl, FormGroup } from '@angular/forms';
import { Author } from '../../interfaces/author';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectAuthors } from '../../state/app.selectors';

@Component({
  selector: 'app-authors',
  templateUrl: './app-authors.component.html',
  styleUrls: ['./app-authors.component.css']
})
export class AppAuthorsComponent implements OnInit {
    authors$: Observable<Array<Author>>;
    @Input() courseItem: Course;
    course: Course;
    @Input() formControlsItem: FormControl;
    formControls: FormControl;
    @Input() parentFormGroup: FormGroup;
    constructor(private store$: Store<AppState>) {
    }
    public ngOnInit(): void {
        this.course = this.courseItem;
        this.authors$ = this.store$.pipe(select(selectAuthors));
        this.formControls = this.formControlsItem;
    }
}
