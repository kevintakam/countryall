import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaCountriesComponent } from './africa-countries.component';

describe('AfricaCountriesComponent', () => {
  let component: AfricaCountriesComponent;
  let fixture: ComponentFixture<AfricaCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricaCountriesComponent]
    });
    fixture = TestBed.createComponent(AfricaCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
