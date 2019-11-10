import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective {
    @Input()
    public date: string;

    constructor(private element: ElementRef<any>) {

        const now = new Date();
        // const courseCreationDate = new Date(this.date); Why this.date undefined???????

        const courseCreationDate = new Date('11/09/2019'); // '12/09/2019' for blu; '07/09/2019' for default
        const differenceTime = now.getTime() - courseCreationDate.getTime();
        const differenceDay = differenceTime / (1000 * 3600 * 24);

        if (differenceDay >= 0 && differenceDay <= 14) {
            this.element.nativeElement.style.borderColor = 'green';
        }
        if (differenceDay < 0) {
            this.element.nativeElement.style.borderColor = 'blue';
        }
    }
}
