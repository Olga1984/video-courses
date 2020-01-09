import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchBarBtnComponent } from './search-bar-btn/search-bar-btn.component';
import { SearchBarInputComponent } from './search-bar-input/search-bar-input.component';
import { SearchBarSuggestionsComponent } from './search-bar-suggestions/search-bar-suggestions.component';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
      SearchBarBtnComponent,
      SearchBarInputComponent,
      SearchBarComponent,
      SearchBarSuggestionsComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  exports: [
      SearchBarBtnComponent,
      SearchBarInputComponent,
      SearchBarComponent,
      SearchBarSuggestionsComponent
  ]
})
export class SearchBarModule { }
