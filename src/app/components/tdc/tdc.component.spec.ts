import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdcComponent } from './tdc.component';

describe('TdcComponent', () => {
  let component: TdcComponent;
  let fixture: ComponentFixture<TdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
