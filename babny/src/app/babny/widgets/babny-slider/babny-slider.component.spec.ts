import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnySliderComponent } from './babny-slider.component';

describe('BabnySliderComponent', () => {
  let component: BabnySliderComponent;
  let fixture: ComponentFixture<BabnySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
