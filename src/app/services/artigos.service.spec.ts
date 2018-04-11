import { TestBed, inject } from '@angular/core/testing';

import { ArtigosService } from './artigos.service';

describe('ArtigosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtigosService]
    });
  });

  it('should be created', inject([ArtigosService], (service: ArtigosService) => {
    expect(service).toBeTruthy();
  }));
});
