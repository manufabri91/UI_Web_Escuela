import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno';
import { AlumnoService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.scss']
})
export class MenuAlumnoComponent implements OnInit {

  public displayedColumns: string[] = ['legajo', 'nombre', 'apellido', 'nacimiento', 'dni', 'telefono', 'modificar', 'eliminar'];
  public alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.listarAlumnos().subscribe(response => {
      this.alumnos = response;
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

  eliminarAlumno(legajo: number) {
    this.alumnoService.borrarAlumno(legajo).subscribe(response => {
      this.alumnoService.listarAlumnos().subscribe(alumnos => {
        this.alumnos = alumnos;
      });
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
