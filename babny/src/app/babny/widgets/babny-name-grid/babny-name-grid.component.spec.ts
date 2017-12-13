import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyNameGridComponent } from './babny-name-grid.component';

describe('BabnyNameGridComponent', () => {
  let component: BabnyNameGridComponent;
  let fixture: ComponentFixture<BabnyNameGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyNameGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyNameGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
