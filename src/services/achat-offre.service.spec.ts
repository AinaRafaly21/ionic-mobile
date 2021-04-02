import { TestBed } from '@angular/core/testing';

import { AchatOffreService } from './achat-offre.service';

describe('AchatOffreService', () => {
  let service: AchatOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
