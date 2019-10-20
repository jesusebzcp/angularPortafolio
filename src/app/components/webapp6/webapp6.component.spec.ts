import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webapp6Component } from './webapp6.component';

describe('Webapp6Component', () => {
  let component: Webapp6Component;
  let fixture: ComponentFixture<Webapp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webapp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webapp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
