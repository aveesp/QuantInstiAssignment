import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WillearnComponent } from './willearn/willearn.component';
import { CourseService } from './services/courseservice.service';
import { ExerciseComponent } from './exercise/exercise.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WillearnComponent,
    ExerciseComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
