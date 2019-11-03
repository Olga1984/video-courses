import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import { ListItemComponentStub } from '../list-item/list-item.component.stub';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          VideoListComponent,
          ListItemComponentStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message', () => {
      const consoleSpy = spyOn(console, 'log');
      component.showCourse('1');
      expect(consoleSpy).toHaveBeenCalled();
    });
});
