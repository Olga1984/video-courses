import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, FormValues } from '../../state/app.state';
import { CoursesSaveAction, CoursesUpdateAction } from '../../state/app.actions';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditComponent implements OnInit, OnDestroy {
    public subs: Subscription;

    private today: Date;
    private courseId: string;
    private course: Course;
    private name: FormControl;
    private description: FormControl;
    private length: FormControl;
    private authors: FormControl;
    private date: FormControl;
    private courseForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService,
                private formBuilder: FormBuilder,
                private router: Router,
                private store$: Store<AppState>) {}

    private initForm(): void  {
    this.name = new FormControl('', Validators.maxLength(50));
    this.description = new FormControl('', Validators.maxLength(500));
    this.length = new FormControl('', [Validators.required]);
    this.authors = new FormControl('', []);
    this.date = new FormControl('', [Validators.required]);

    this.courseForm = new FormGroup({
            name: this.name,
            description: this.description,
            length: this.length,
            authors: this.authors,
            date: this.date
        });
    }
    public setCurrentDate(): void {
        this.today = new Date();
    }
    public parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
    public cancel(): void {
        this.router.navigate(['courses']);
    }
    public save(): void {
        const cousrseFormValues = {} as FormValues;
        if (this.courseId && this.courseId !== 'new') {
            cousrseFormValues.courseUpdateId = this.courseId;
            cousrseFormValues.formValue = this.courseForm.value;
            this.store$.dispatch(new CoursesUpdateAction(cousrseFormValues));
            this.router.navigate(['courses']);
        }
        if (this.courseId === 'new') {
            cousrseFormValues.formValue = this.courseForm.value;
            this.store$.dispatch(new CoursesSaveAction(cousrseFormValues));
            this.router.navigate(['courses']);
        }
    }
    private buildForm(): void {
        this.setCurrentDate();
        this.courseForm = this.formBuilder.group({
            name: this.name,
            description: this.description,
            length: this.length,
            authors: this.authors,
            date: this.date
        });
    }
    private fillEditForm(): void {
        if (this.courseId && this.courseId !== 'new') {
            const subscription = this.coursesService.getCourse(this.courseId).subscribe((course) => {
                this.course = course;
                this.buildForm();
                this.name.setValue(this.course.name);
                this.description.setValue(this.course.description);
                this.length.setValue(this.course.length);
                this.date.setValue(this.course.date);
                this.authors.setValue('authors');
            });
            this.subs.add(subscription);
        }
    }
    public ngOnInit(): void {
         this.subs = this.route.params.subscribe((params: Params) => {
            this.courseId = params.id;
         });
         this.initForm();
         this.fillEditForm();
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
