import { TestBed } from '@angular/core/testing';

import { BusqueService } from './busque.service';

describe('BusqueService', () => {
  let service: BusqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
