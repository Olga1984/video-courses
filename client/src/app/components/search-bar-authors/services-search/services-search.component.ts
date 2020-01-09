import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { LoadAuthorsAction, SelectAuthor } from '../../../state/app.actions';
import { AppState } from '../../../state/app.state';
import { selectSelectedAuthor, selectAuthors, selectAuthorsLoading } from '../../../state/app.selectors';
import { Author, SearchEntity } from '../../../interfaces/author';

@Component({
  selector: 'app-services-search',
  templateUrl: './services-search.component.html',
  styleUrls: ['./services-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsSearchComponent implements OnInit, OnDestroy {
    value: Author;
    @Output() changeAuthor = new EventEmitter<Author>();

    author: Observable<Author>;
    authors: Observable<Array<Author>>;
    authorsLoading: Observable<boolean>;
    authorValue: Author;
    servicesValue: Array<Author> = [];
    areSuggestionOpened: boolean;
    filteredAuthors: Array<SearchEntity> = [];
    subscriptions: Array<Subscription> = [];

    private inputFocused: boolean = false;
    private suggestionFocused: boolean = false;

    constructor(
        protected store: Store<AppState>,
        protected changeDetector: ChangeDetectorRef
    ) {
        this.authors = this.store.pipe(select(selectAuthors));
        this.author = this.store.pipe(select(selectSelectedAuthor));
        this.authorsLoading = this.store.pipe(select(selectAuthorsLoading));
    }

    public ngOnInit(): void {
        this.store.dispatch(new LoadAuthorsAction());

        const authorSubscription = this.author.subscribe((author) => {
            this.authorValue = author;
            this.value = author;
            const authorName = this.value
                ? this.value.name || ''
                : '';
            this.filteredAuthors = this.filter(authorName, this.servicesValue);
            this.changeAuthor.emit(author);
            this.changeDetector.markForCheck();
        });

        const authorsSubscription = this.authors.subscribe((authors) => {
            this.servicesValue = authors;
            const authorName = this.value
                ? this.value.name || ''
                : '';
            this.filteredAuthors = this.filter(authorName, authors);
            this.changeDetector.markForCheck();
        });

        this.subscriptions.push(authorSubscription);
        this.subscriptions.push(authorsSubscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

   public applySearch(value: string): void {
        const authorName = value;

        this.authors
            .pipe(first())
            .subscribe((authors) => {
                this.filteredAuthors = this.filter(authorName, authors);
                this.changeDetector.markForCheck();
            });
    }

    public selectAuthor(authorName?: string): void {
        let targetAuthor: Author;

        targetAuthor = this.servicesValue.find((author) => author.name === authorName);

        if (!targetAuthor && authorName) {
            targetAuthor = this.servicesValue.find((author) => {
                const currentAuthorName = author.name.toLowerCase();
                const targetAuthorName = authorName ? authorName.toLowerCase() : '';

                return currentAuthorName.indexOf(targetAuthorName) > -1;
            });
        }

        if (!targetAuthor) {
            targetAuthor = this.authorValue;
            this.value = this.authorValue;
        }

        this.changeAuthor.emit(targetAuthor);
        this.store.dispatch(new SelectAuthor(targetAuthor));
    }

   public focusSuggestion(value: boolean): void {
        this.suggestionFocused = value;
        this.checkFocus();
    }

   public focusInput(value: boolean): void {
        this.inputFocused = value;
        this.checkFocus();
    }

    private checkFocus(): void {
        this.areSuggestionOpened = this.suggestionFocused || this.inputFocused;
    }

    private filter(value: string, services: Array<Author>): Array<SearchEntity> {
        const searchValue = value.toLowerCase();

        return services.filter((service) => {
            const serviceName = service.name.toLowerCase();

            return serviceName.indexOf(searchValue) > -1;
        })
            .map((author) => {
                return {
                    id: author.id,
                    name: author.name
                };
            });
    }
}
