import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno';
import { AlumnoService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.scss']
})
export class MenuAlumnoComponent implements OnInit {

  displayedColumns: string[] = ['legajo', 'nombre', 'apellido', 'nacimiento', 'dni', 'telefono','modificar','eliminar'];
  dataSource:[];
  _alumnoService: any;
  constructor(alumnoService : AlumnoService) {
    this._alumnoService = alumnoService;
   }

  ngOnInit() {
    this._alumnoService.listarAlumnos().toPromise().then(elem => {
      this.dataSource = elem;
    });
  }
  eliminar(legajo){
    this._alumnoService.e

  }

}
