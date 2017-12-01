import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyHomeComponent } from './babny-home.component';

describe('BabnyHomeComponent', () => {
  let component: BabnyHomeComponent;
  let fixture: ComponentFixture<BabnyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
