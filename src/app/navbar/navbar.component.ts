import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/courseservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  courseData = {};

  constructor(private courseService : CourseService) {}

  ngOnInit() {
    this.courseService.getJSON().subscribe(data => {
      // console.log(data.result);
      this.courseData = data.result;
    });
  }

}
