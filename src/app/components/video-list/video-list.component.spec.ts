import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import { ListItemComponentStub } from '../list-item/list-item.component.stub';
import { OrderByStubPipe } from '../../pipes/order-by.pipe.stub';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          VideoListComponent,
          ListItemComponentStub,
          OrderByStubPipe
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
    component.search = 'test';
    expect(component).toBeTruthy();
  });

  it('should log message', () => {
      const consoleSpy = spyOn(console, 'log');
      component.showCourse('1');
      expect(consoleSpy).toHaveBeenCalled();
    });
});
