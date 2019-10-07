import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../../models/noticia';

@Injectable()
export class NoticiaService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public listarNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(`https://apisitiou.herokuapp.com/novedades/listar`);
  }

  public cargarNoticias(noticia: Noticia): Observable<Noticia[]> {
    return this.httpClient.post<Noticia[]>('https://apisitiou.herokuapp.com/novedades/cargar', noticia);
  }
  public actualizarNoticias(noticia: Noticia): Observable<Noticia> {
    return this.httpClient.put<Noticia>('https://apisitiou.herokuapp.com/novedades/actualizar', noticia);
  }
  public borrarNoticia(id: number): Observable<any> {
    return this.httpClient.delete<any>(`https://apisitiou.herokuapp.com/novedades/borrar/${id}`);
  }
  public getNoticia(id: number): Observable<Noticia> {
    return this.httpClient.get<Noticia>(`https://apisitiou.herokuapp.com/novedades/getNovedad/${id}`);
  }

}
