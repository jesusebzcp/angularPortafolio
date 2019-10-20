import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webapp3Component } from './webapp3.component';

describe('Webapp3Component', () => {
  let component: Webapp3Component;
  let fixture: ComponentFixture<Webapp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webapp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webapp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
