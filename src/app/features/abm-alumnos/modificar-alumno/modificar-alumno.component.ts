import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/core/services/alumno/alumno.service';
import { Alumno } from 'src/app/core/models/alumno';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.scss']
})
export class ModificarAlumnoComponent implements OnInit {

  legajo: number;

  constructor(private activatedRoute: ActivatedRoute,
              private alumnoService: AlumnoService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.legajo = +params.get('legajo');
    });
  }

  actualizarAlumno(formGroup: FormGroup) {
    const alumno = new Alumno(formGroup.value);
    console.log(alumno.nacimiento);
    this.alumnoService.actualizarAlumnos(alumno).subscribe(resp => {
      this.router.navigate(['abm-alumnos/menu-alumno']);
    },
    err => {
      console.log(err);
      // TODO: mostrar toaster?
    });
  }
}
