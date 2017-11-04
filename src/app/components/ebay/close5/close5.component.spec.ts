import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Close5Component } from './close5.component';

describe('Close5Component', () => {
  let component: Close5Component;
  let fixture: ComponentFixture<Close5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Close5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Close5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
