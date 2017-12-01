import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyNavComponent } from './babny-nav.component';

describe('BabnyNavComponent', () => {
  let component: BabnyNavComponent;
  let fixture: ComponentFixture<BabnyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
