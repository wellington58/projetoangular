import { TestBed } from '@angular/core/testing';

import { AppEventoService } from './app-evento.service';

describe('AppEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppEventoService = TestBed.get(AppEventoService);
    expect(service).toBeTruthy();
  });
});
