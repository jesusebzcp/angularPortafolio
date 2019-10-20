import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webapp4Component } from './webapp4.component';

describe('Webapp4Component', () => {
  let component: Webapp4Component;
  let fixture: ComponentFixture<Webapp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webapp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webapp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
