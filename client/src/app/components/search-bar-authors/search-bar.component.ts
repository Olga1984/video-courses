import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
    @Input() showEntitiesList: boolean;
    public ngOnInit(): void {}
}
