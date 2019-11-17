import { BorderStyleDirective } from './border-style.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

// Simple test component that will not in the actual app
@Component({
    template: '<div [appBorderStyle]="date">Testing Directive</div>'
})
class TestComponent {
    date = new Date();
    constructor() { }
}

describe('BorderStyleDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                BorderStyleDirective
            ]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('border should have green color', () => {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const div: HTMLElement = debugEl.querySelector('div');
        fixture.detectChanges();
        expect(div.style.borderColor).toBe('green');
    });

    it('border should have blue color', () => {
        // @ts-ignore
        component.date = `01/09/2020`;
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const div: HTMLElement = debugEl.querySelector('div');
        fixture.detectChanges();
        expect(div.style.borderColor).toBe('blue');
    });
});
