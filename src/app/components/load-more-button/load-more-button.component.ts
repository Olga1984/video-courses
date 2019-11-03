import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent {

  public loadCourses(): void {
      console.log('load courses');
  }
}
