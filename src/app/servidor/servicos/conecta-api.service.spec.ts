import { TestBed } from '@angular/core/testing';

import { ConectaApiService } from './conecta-api.service';

describe('ConectaApiService', () => {
  let service: ConectaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
