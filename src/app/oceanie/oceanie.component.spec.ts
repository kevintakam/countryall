import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanieComponent } from './oceanie.component';

describe('OceanieComponent', () => {
  let component: OceanieComponent;
  let fixture: ComponentFixture<OceanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OceanieComponent]
    });
    fixture = TestBed.createComponent(OceanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
