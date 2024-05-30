import { TestBed } from '@angular/core/testing';

import { QcmquestionService } from './qcmquestion.service';

describe('QcmquestionService', () => {
  let service: QcmquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcmquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
