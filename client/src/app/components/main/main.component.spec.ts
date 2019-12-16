import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { SearchBarComponentStub } from '../search-bar/search-bar.component.stub';
import { VideoListComponentStub } from '../video-list/video-list.component.stub';
import { LoadMoreButtonComponentStub } from '../load-more-button/load-more-button.component.stub';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          MainComponent,
          SearchBarComponentStub,
          VideoListComponentStub,
          LoadMoreButtonComponentStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
