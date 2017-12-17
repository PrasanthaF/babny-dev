import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyMainTabMenuComponent } from './babny-main-tab-menu.component';

describe('BabnyMainTabMenuComponent', () => {
  let component: BabnyMainTabMenuComponent;
  let fixture: ComponentFixture<BabnyMainTabMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyMainTabMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyMainTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
