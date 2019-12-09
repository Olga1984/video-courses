import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../interfaces/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit, OnDestroy {
    private today: Date;
    private submitted = false;
    private success = false;
    private courseId: string;
    private course: ICourse;
    public subs: Subscription;

    private title: FormControl;
    private description: FormControl;
    private duration: FormControl;
    private authors: FormControl;
    private date: FormControl;

   private courseForm: FormGroup = new FormGroup({
        title: this.title,
        description: this.description,
        duration: this.duration,
        authors: this.authors,
        date: this.date
    });

    private initForm(): void  {
    this.title = new FormControl('', []);
    this.description = new FormControl('', []);
    this.duration = new FormControl('', []);
    this.authors = new FormControl('', []);
    this.date = new FormControl('', []);
}

    constructor(private route: ActivatedRoute,
                private data: CoursesService,
                private formBuilder: FormBuilder,
                private router: Router) {
     this.subs = this.route.params.subscribe((params: Params) => {
            this.courseId = params.id;
        });
    }

    public getCurrentDate(): void {
        this.today = new Date();
    }
    public parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
    public onSubmit(): void {
        this.submitted = true;
        if (this.courseForm.invalid) {
            return;
        }
        this.success = true;
    }

    public reRouteToMainPage(url: string): void {
        this.router.navigate([url]);
    }

    private buildForm(): void {
        this.getCurrentDate();
        this.courseForm = this.formBuilder.group({
            title: this.title,
            description: this.description,
            duration: this.duration,
            authors: this.authors,
            date: this.date
        });
    }
    private fillEditForm(): void {
        if (this.courseId && this.courseId !== 'new') {
            this.course = this.data.getCourse(this.courseId);
            this.buildForm();
            this.title.setValue(this.course.title);
            this.description.setValue(this.course.description);
            this.duration.setValue(this.course.duration);
            this.date.setValue(this.course.creationDate);
            this.authors.setValue('authors');
        }
    }
    public ngOnInit(): void {
        this.initForm();
        this.fillEditForm();
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
