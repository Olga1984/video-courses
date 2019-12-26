import { Component, Input } from '@angular/core';

/** @ignore */
@Component({
    selector: 'app-spinner',
    template: ''
})
export class SpinnerComponentStub {
    @Input() size: string = 'normal';
    @Input() position: string = 'container-centered';
}
