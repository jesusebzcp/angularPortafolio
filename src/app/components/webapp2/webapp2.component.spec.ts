import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webapp2Component } from './webapp2.component';

describe('Webapp2Component', () => {
  let component: Webapp2Component;
  let fixture: ComponentFixture<Webapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webapp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
