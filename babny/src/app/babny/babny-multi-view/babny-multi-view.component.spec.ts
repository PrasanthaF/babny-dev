import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyMultiViewComponent } from './babny-multi-view.component';

describe('BabnyMultiViewComponent', () => {
  let component: BabnyMultiViewComponent;
  let fixture: ComponentFixture<BabnyMultiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyMultiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyMultiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
