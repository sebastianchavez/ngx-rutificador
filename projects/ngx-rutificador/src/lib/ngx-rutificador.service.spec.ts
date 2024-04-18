import { TestBed } from '@angular/core/testing';

import { NgxRutificadorService } from './ngx-rutificador.service';

describe('NgxRutificadorService', () => {
  let service: NgxRutificadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRutificadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
