import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderComponent } from './top-header.component';
import { LogoComponentStub } from '../logo/logo.component.stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopHeaderComponent', () => {
  let component: TopHeaderComponent;
  let fixture: ComponentFixture<TopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([])
        ],
      declarations: [
          TopHeaderComponent,
          LogoComponentStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
