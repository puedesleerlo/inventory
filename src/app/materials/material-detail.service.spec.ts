import { TestBed, inject } from '@angular/core/testing';

import { MaterialDetailService } from './material-detail.service';

describe('MaterialDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialDetailService]
    });
  });

  it('should be created', inject([MaterialDetailService], (service: MaterialDetailService) => {
    expect(service).toBeTruthy();
  }));
});
