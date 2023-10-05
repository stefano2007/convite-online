/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AniversarianteService } from './aniversariante.service';

describe('Service: Aniversariante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AniversarianteService]
    });
  });

  it('should ...', inject([AniversarianteService], (service: AniversarianteService) => {
    expect(service).toBeTruthy();
  }));
});
