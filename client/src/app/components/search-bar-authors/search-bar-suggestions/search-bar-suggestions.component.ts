import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SearchEntity } from '../../../interfaces/author';

@Component({
    selector: 'app-search-bar-suggestions',
    templateUrl: './search-bar-suggestions.component.html',
    styleUrls: ['./search-bar-suggestions.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarSuggestionsComponent implements OnInit {
    @Input() filteredSuggestions: Array<SearchEntity>;

    @Output() focusSuggestion = new EventEmitter<boolean>();
    @Output() selectSuggestion = new EventEmitter<SearchEntity>();

    selectedEntity: number;

    public ngOnInit(): void {}

    public selectEntity(entity: SearchEntity): void {
        this.selectSuggestion.emit(entity);
    }

    public focusEntity(value: boolean): void {
        this.focusSuggestion.emit(value);
    }
}
