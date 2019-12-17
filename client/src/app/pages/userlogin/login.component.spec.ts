import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MainComponentStub } from '../../components/main/main.component.stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const router = {
        navigate: jasmine.createSpy('navigate')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([ {
                path: 'courses',
                component: MainComponentStub
            }])
        ],
        declarations: [
            LoginComponent,
            MainComponentStub
        ],
        providers: [{ provide: Router, useValue: router }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /courses route after login', () => {
      // component.login();
      // fixture.detectChanges();
      // expect(router.navigate).toHaveBeenCalledWith(['/courses']);
    });
});
