import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search-bar-btn',
    templateUrl: './search-bar-btn.component.html',
    styleUrls: ['./search-bar-btn.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarBtnComponent {
    @Output() submitEntity: EventEmitter<any> = new EventEmitter();

    public submit(): void {
        this.submitEntity.emit();
    }
}
