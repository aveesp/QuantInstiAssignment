import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillearnComponent } from './willearn.component';

describe('WillearnComponent', () => {
  let component: WillearnComponent;
  let fixture: ComponentFixture<WillearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
