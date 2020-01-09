import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleStubDirective {
    @Input('appBorderStyle') public date: string;
}
