import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyFooterComponent } from './babny-footer.component';

describe('BabnyFooterComponent', () => {
  let component: BabnyFooterComponent;
  let fixture: ComponentFixture<BabnyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
