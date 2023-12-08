import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeCountriesComponent } from './europe-countries.component';

describe('EuropeCountriesComponent', () => {
  let component: EuropeCountriesComponent;
  let fixture: ComponentFixture<EuropeCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropeCountriesComponent]
    });
    fixture = TestBed.createComponent(EuropeCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
