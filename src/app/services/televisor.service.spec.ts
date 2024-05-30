import { TestBed } from '@angular/core/testing';

import { TelevisorService } from './televisor.service';

describe('TelevisorService', () => {
  let service: TelevisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});