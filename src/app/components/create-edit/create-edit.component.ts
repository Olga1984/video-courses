import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
    private today: Date;
    private submitted = false;
    private success = false;
    private courseId: string;
    private course: ICourse;

    private title: FormControl = new FormControl('', []);
    private description: FormControl = new FormControl('', []);
    private duration: FormControl = new FormControl('', []);
    private authors: FormControl = new FormControl('', []);
    private date: FormControl = new FormControl('', []);

   private courseForm: FormGroup = new FormGroup({
        title: this.title,
        description: this.description,
        duration: this.duration,
        authors: this.authors,
        date: this.date
    });

    constructor(private route: ActivatedRoute,
                private data: CoursesService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.route.params.subscribe((params: Params) => {
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
    ngOnInit(): void {
        this.fillEditForm();
    }
}
