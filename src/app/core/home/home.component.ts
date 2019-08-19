import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { AlumnoService } from '../services/alumno.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
  }

  testapi() {
    this.alumnoService.listarAlumnos()
    .pipe(
      map(resp => this.alumnos = resp)
    ).subscribe();
  }
}
