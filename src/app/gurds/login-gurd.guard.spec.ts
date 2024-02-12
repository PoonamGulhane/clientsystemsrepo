import { TestBed } from '@angular/core/testing';

import { LoginGurdGuard } from './login-gurd.guard';

describe('LoginGurdGuard', () => {
  let guard: LoginGurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
