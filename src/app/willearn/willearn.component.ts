import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from '../services/courseservice.service';

@Component({
  selector: 'app-willearn',
  templateUrl: './willearn.component.html',
  styleUrls: ['./willearn.component.css']
})
export class WillearnComponent implements OnInit {
  courseData = {};

  constructor(private courseService : CourseService) {}

  ngOnInit() {
    this.courseService.getJSON().subscribe(data => {
      // console.log(data.result);
      this.courseData = data.result;
    });
  }

}
