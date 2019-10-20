import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webapp5Component } from './webapp5.component';

describe('Webapp5Component', () => {
  let component: Webapp5Component;
  let fixture: ComponentFixture<Webapp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webapp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webapp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
