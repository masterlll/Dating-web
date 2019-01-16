/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlerityService } from './alerity.service';

describe('Service: Alerity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlerityService]
    });
  });

  it('should ...', inject([AlerityService], (service: AlerityService) => {
    expect(service).toBeTruthy();
  }));
});
