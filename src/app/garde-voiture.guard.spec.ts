import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardeVoitureGuard } from './garde-voiture.guard';

describe('gardeVoitureGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardeVoitureGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
