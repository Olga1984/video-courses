import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './app-date.component.html',
  styleUrls: ['./app-date.component.css']
})
export class AppDateComponent implements OnInit {
    @Input() parentFormGroup: FormGroup;
    @Input() formControlsItem: FormControl;
    formControls: FormControl;
    public ngOnInit(): void {
        this.formControls = this.formControlsItem;
    }
}
