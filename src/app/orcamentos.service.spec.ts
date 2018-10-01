import { TestBed, inject } from '@angular/core/testing';

import { OrcamentosService } from './orcamentos.service';

describe('OrcamentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrcamentosService]
    });
  });

  it('should be created', inject([OrcamentosService], (service: OrcamentosService) => {
    expect(service).toBeTruthy();
  }));
});
