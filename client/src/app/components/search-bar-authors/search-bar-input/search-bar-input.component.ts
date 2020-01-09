import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-bar-input',
    templateUrl: './search-bar-input.component.html',
    styleUrls: ['./search-bar-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarInputComponent implements OnInit {
    @Input() inputSearch: string;
    @Input() placeholder: string;
    @Input() label: string;

    @Output() inputFocus: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() inputSubmit: EventEmitter<string> = new EventEmitter<string>();

    key = Math.random() + Date.now();

    public ngOnInit(): void {}

    focus(value: boolean): void {
        this.inputFocus.emit(value);
    }

    public submit(): void {
        this.inputSubmit.emit(this.inputSearch);
    }

    public change(value: string): void {
        this.inputSearch = value;
        this.inputChange.emit(this.inputSearch);
    }
}
