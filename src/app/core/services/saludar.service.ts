import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaludarService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public saludar(nombre?: string): Promise<string> {
    if (nombre) {
      return this.httpClient.get<string>(`https://apisitiou.herokuapp.com/saludar?name=${nombre}`)
      .toPromise();
    }
    return this.httpClient.get<string>(`https://apisitiou.herokuapp.com/saludar`)
      .toPromise();
  }
}
  