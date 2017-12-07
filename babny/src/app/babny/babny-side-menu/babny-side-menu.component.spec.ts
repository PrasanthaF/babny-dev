import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnySideMenuComponent } from './babny-side-menu.component';

describe('BabnySideMenuComponent', () => {
  let component: BabnySideMenuComponent;
  let fixture: ComponentFixture<BabnySideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnySideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
