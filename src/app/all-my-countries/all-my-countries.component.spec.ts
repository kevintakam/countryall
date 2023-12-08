import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyCountriesComponent } from './all-my-countries.component';

describe('AllMyCountriesComponent', () => {
  let component: AllMyCountriesComponent;
  let fixture: ComponentFixture<AllMyCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMyCountriesComponent]
    });
    fixture = TestBed.createComponent(AllMyCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
