import { TestBed } from '@angular/core/testing';

import { CameraNativeService } from './camera-native.service';

describe('CameraNativeService', () => {
  let service: CameraNativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraNativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
