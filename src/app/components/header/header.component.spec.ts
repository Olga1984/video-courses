import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TopHeaderComponentStub } from '../top-header/top-header.component.stub';
import { BreadcrumbsComponentStub } from '../breadcrumbs/breadcrumbs.component.stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([])
        ],
      declarations: [
          HeaderComponent,
          TopHeaderComponentStub,
          BreadcrumbsComponentStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
