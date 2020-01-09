import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponentStub } from './components/header/header.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponentStub } from './components/footer/footer.component.stub';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([])
        ],
      declarations: [
          AppComponent,
          HeaderComponentStub,
          FooterComponentStub
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
