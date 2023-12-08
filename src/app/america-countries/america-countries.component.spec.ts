import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaCountriesComponent } from './america-countries.component';

describe('AmericaCountriesComponent', () => {
  let component: AmericaCountriesComponent;
  let fixture: ComponentFixture<AmericaCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmericaCountriesComponent]
    });
    fixture = TestBed.createComponent(AmericaCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
