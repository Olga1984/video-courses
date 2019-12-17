import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerContainerComponent } from './spinner-container.component';

@NgModule({
    declarations: [
        SpinnerComponent,
        SpinnerContainerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SpinnerComponent,
        SpinnerContainerComponent
    ]
})
export class SpinnerModule { }
