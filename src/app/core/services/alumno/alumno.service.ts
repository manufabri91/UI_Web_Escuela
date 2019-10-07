import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../models/alumno';

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
  public actualizarAlumnos(alumno: Alumno): Observable<Alumno> {
    return this.httpClient.put<Alumno>('https://apisitiou.herokuapp.com/alumnos/actualizar', alumno);
  }
  public borrarAlumno(legajo: number): Observable<any> {
    return this.httpClient.delete<any>(`https://apisitiou.herokuapp.com/alumnos/borrar/${legajo}`);
  }
  public getAlumno(legajo: number): Observable<Alumno> {
    return this.httpClient.get<Alumno>(`https://apisitiou.herokuapp.com/alumnos/getAlumno/${legajo}`);
  }

}
