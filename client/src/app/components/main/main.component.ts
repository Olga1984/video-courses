import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ICourse} from '../../interfaces/course';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    @ViewChild('coursesSearchInput') coursesSearchInput: ElementRef;
    apiResponse:any;
    isSearching:boolean;
    private router: Router;

    constructor(router: Router,
                private httpClient: HttpClient) {
        this.router = router;
        this.isSearching = false;
        this.apiResponse = [];
    }
    ngOnInit(): void  {
        fromEvent(this.coursesSearchInput.nativeElement, 'keyup').pipe(
            map((event: any) => {
                return event.target.value;
            })
            ,filter(res => res.length > 2)
            ,debounceTime(1000)
            ,distinctUntilChanged()
        ).subscribe((text: string) => {
            this.isSearching = true;
            this.httpClient.get<ICourse[]>(`http://localhost:3004/courses?start=0&count=1`).subscribe((res)=>{
                console.log('res',res);
                this.isSearching = false;
                this.apiResponse = res; //how to display in video-courses list component
            },(err)=>{
                this.isSearching = false;
                console.log('error',err);
            });
        });
    }

    public reRouteToCreatePage(): void {
        this.router.navigate(['courses/', 'new' ]);
    }
}
