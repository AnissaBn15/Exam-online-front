import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmtestComponent } from './qcmtest.component';

describe('QcmtestComponent', () => {
  let component: QcmtestComponent;
  let fixture: ComponentFixture<QcmtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmtestComponent]
    });
    fixture = TestBed.createComponent(QcmtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
