import { TestBed, inject } from '@angular/core/testing';

import { MaterialsResolverService } from './materials-resolver.service';

describe('MaterialsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialsResolverService]
    });
  });

  it('should be created', inject([MaterialsResolverService], (service: MaterialsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
