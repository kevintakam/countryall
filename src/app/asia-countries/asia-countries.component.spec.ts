import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaCountriesComponent } from './asia-countries.component';

describe('AsiaCountriesComponent', () => {
  let component: AsiaCountriesComponent;
  let fixture: ComponentFixture<AsiaCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsiaCountriesComponent]
    });
    fixture = TestBed.createComponent(AsiaCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
