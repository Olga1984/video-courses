import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './app-duration.component.html',
  styleUrls: ['./app-duration.component.css']
})
export class AppDurationComponent implements OnInit {
    @Input() courseItem: Course;
    course: Course;
    @Input() formControlsItem: FormControl;
    formControls: FormControl;
    @Input() parentFormGroup: FormGroup;

    public ngOnInit(): void {
        this.course = this.courseItem;
        this.formControls = this.formControlsItem;
    }
}
