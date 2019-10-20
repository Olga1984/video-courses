import { Component, OnInit } from '@angular/core';
import {Course} from '../../interfaces/course';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  courseList: Array<Course>;
  constructor() { }

  ngOnInit() {
    this.courseList = [{
      id: 0,
      title: 'item 1',
      creationDate: '21.02.2019',
      duration: 30,
      description: 'ghgf khw egf kwegqf kw2efg wfgwhf ghwjgfhgwhf'
    },
      {
        id: 0,
        title: 'item 2',
        creationDate: '30.02.2018',
        duration: 50,
        description: 'ghgfkhweg fkwecgqfkw2efg wfgwhfg hwjgfhgwhf'
      }];
  }
}
