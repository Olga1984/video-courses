import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnInit {
    @Input('appBorderStyle') public date: string;

    constructor(private element: ElementRef,
                private renderer: Renderer2) {}
    ngOnInit(): void {
        const now = new Date();
        const courseCreationDate = new Date(this.date);
        const differenceTime = now.getTime() - courseCreationDate.getTime();
        const differenceDay = differenceTime / (1000 * 3600 * 24);

        if (differenceDay >= 0 && differenceDay <= 14) {
            this.renderer.setStyle(this.element.nativeElement, 'borderColor', 'green');
        }
        if (differenceDay < 0) {
            this.renderer.setStyle(this.element.nativeElement, 'borderColor', 'blue');
        }
    }
}
