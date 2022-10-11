import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSusanComponent } from './about-susan.component';

describe('AboutSusanComponent', () => {
  let component: AboutSusanComponent;
  let fixture: ComponentFixture<AboutSusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSusanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
