import { TestBed } from '@angular/core/testing';

import { AchatCreditService } from './achat-credit.service';

describe('AchatCreditService', () => {
  let service: AchatCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
