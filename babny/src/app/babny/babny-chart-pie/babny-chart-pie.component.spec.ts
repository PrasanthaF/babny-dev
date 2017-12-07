import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyChartPieComponent } from './babny-chart-pie.component';

describe('BabnyChartPieComponent', () => {
  let component: BabnyChartPieComponent;
  let fixture: ComponentFixture<BabnyChartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyChartPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
