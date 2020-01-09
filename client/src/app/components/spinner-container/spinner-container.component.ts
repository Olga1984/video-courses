import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SpinnerSize } from './types/spinner-size';

@Component({
  selector: 'app-spinner-container',
  templateUrl: './spinner-container.component.html',
  styleUrls: ['./spinner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerContainerComponent {
    @Input()
    @HostBinding('attr.aria-busy')
    show: boolean = false;

    @Input()
    size: SpinnerSize = SpinnerSize.Normal;
}
