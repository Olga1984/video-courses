import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
    @ViewChild('coursesSearchInput') coursesSearchInput: ElementRef;
    public apiResponse: any;
    public isSearching: boolean;
    public subs: Subscription;

    constructor(private router: Router,
                private httpClient: HttpClient) {}
    public ngOnInit(): void  {
        this.isSearching = false;
        this.apiResponse = [];
        this.subs = fromEvent(this.coursesSearchInput.nativeElement, 'keyup').pipe(
            map((event: any) => {
                return event.target.value;
            }),
            filter((res) => res.length > 2),
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((text: string) => {
            this.isSearching = true;
            this.httpClient.get<Array<Course>>(`http://localhost:3004/courses?start=0&count=1`).subscribe((res) => {
                this.isSearching = false;
                this.apiResponse = res;
            }, (err) => {
                this.isSearching = false;
            });
        });
    }
    public reRouteToCreatePage(): void {
        this.router.navigate(['courses/', 'new' ]);
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
