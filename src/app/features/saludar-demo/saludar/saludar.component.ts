import { Component, OnInit } from '@angular/core';
import { SaludarService } from 'src/app/core/services/saludar.service';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  public saludo: string;
  public texto: string;

  constructor(private _saludarService: SaludarService) { }

  ngOnInit() {
  }

  public saludar() {
    if (this.texto && this.texto !== '') {
      this._saludarService.saludar(this.texto)
        .then(response => this.saludo = response);
    } else {
      this._saludarService.saludar()
        .then(response => this.saludo = response);
    }
  }

}
