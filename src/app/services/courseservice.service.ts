import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CourseService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/course1.json")
  }

}
