import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialspageComponent } from './specialspage.component';

describe('SpecialspageComponent', () => {
  let component: SpecialspageComponent;
  let fixture: ComponentFixture<SpecialspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
