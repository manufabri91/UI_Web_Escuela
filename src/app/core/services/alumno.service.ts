import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable()
export class AlumnoService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public listarAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`https://apisitiou.herokuapp.com/alumnos/listar`);
  }

  public cargarAlumnos(alumno: Alumno): Observable<Alumno[]> {
    return this.httpClient.post<Alumno[]>('https://apisitiou.herokuapp.com/alumnos/cargar', alumno);
  }

}
