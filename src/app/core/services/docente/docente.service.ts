import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../../models/docente';

@Injectable()
export class DocenteService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public listarDocentes(): Observable<Docente[]> {
    return this.httpClient.get<Docente[]>(`https://apisitiou.herokuapp.com/docentes/listar`);
  }

  public cargarDocentes(docente: Docente): Observable<Docente[]> {
    return this.httpClient.post<Docente[]>('https://apisitiou.herokuapp.com/docentes/cargar', docente);
  }
  public actualizarDocentes(docente: Docente): Observable<Docente> {
    return this.httpClient.put<Docente>('https://apisitiou.herokuapp.com/dcentes/actualizar', docente);
  }
  public borrarDocente(legajo: number): Observable<any> {
    return this.httpClient.delete<any>(`https://apisitiou.herokuapp.com/Docentes/borrar/${legajo}`);
  }
  public getDocente(legajo: number): Observable<Docente> {
    return this.httpClient.get<Docente>(`https://apisitiou.herokuapp.com/Docentes/getDocente/${legajo}`);
  }

}
