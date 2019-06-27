import { TestBed } from '@angular/core/testing';

import { SaludarService } from './saludar.service';

describe('SaludarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaludarService = TestBed.get(SaludarService);
    expect(service).toBeTruthy();
  });
});
