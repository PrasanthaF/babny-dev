import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyAddNameComponent } from './babny-add-name.component';

describe('BabnyAddNameComponent', () => {
  let component: BabnyAddNameComponent;
  let fixture: ComponentFixture<BabnyAddNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyAddNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyAddNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
