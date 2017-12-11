import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabnyFielderrorsComponent } from './babny-fielderrors.component';

describe('BabnyFielderrorsComponent', () => {
  let component: BabnyFielderrorsComponent;
  let fixture: ComponentFixture<BabnyFielderrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabnyFielderrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabnyFielderrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
