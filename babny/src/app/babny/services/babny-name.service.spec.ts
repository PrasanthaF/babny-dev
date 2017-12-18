import { TestBed, inject } from '@angular/core/testing';

import { BabnyNameService } from './babny-name.service';

describe('BabnyNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabnyNameService]
    });
  });

  it('should be created', inject([BabnyNameService], (service: BabnyNameService) => {
    expect(service).toBeTruthy();
  }));
});
