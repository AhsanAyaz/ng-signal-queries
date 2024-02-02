import { TestBed } from '@angular/core/testing';

import { StepDescriptionGeneratorService } from './step-description-generator.service';

describe('StepDescriptionGeneratorService', () => {
  let service: StepDescriptionGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepDescriptionGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
