import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './userlogin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MainComponentStub } from '../../components/main/main.component.stub';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
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
            UserLoginComponent,
            MainComponentStub
        ],
        providers: [{ provide: Router, useValue: router }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /courses route after login', () => {
      component.login();
      fixture.detectChanges();
      expect(router.navigate).toHaveBeenCalledWith(['/courses']);
    });
});
