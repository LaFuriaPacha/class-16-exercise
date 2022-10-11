import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBobComponent } from './about-bob.component';

describe('AboutBobComponent', () => {
  let component: AboutBobComponent;
  let fixture: ComponentFixture<AboutBobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
