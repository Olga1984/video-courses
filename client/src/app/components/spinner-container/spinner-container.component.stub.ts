import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-container',
  template: ''
})
export class SpinnerContainerComponentStub {
    @Input()
    show: boolean = false;

    @Input()
    size: string = 'normal';
}
