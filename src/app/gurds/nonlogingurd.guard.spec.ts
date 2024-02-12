import { TestBed } from '@angular/core/testing';

import { NonlogingurdGuard } from './nonlogingurd.guard';

describe('NonlogingurdGuard', () => {
  let guard: NonlogingurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonlogingurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
