import { TestBed } from '@angular/core/testing';
import { AlumnoService } from './alumno.service';


describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoService = TestBed.get(AlumnoService);
    expect(service).toBeTruthy();
  });
});
