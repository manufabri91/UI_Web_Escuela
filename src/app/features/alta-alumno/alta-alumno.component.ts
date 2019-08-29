import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/shared/IAlumno';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/core/models/alumno';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {
  alumno : IAlumno;
  alumnoDto : Alumno;

  constructor(private alumnoService : AlumnoService) { }

  alumnoForm = new FormGroup({
    legajo: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ]),
    nombre: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ]),
    apellido: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ]),
    nacimiento: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ]),
    dni: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ]),
    telefono: new FormControl('',[
      Validators.required,
      Validators.maxLength(25)
    ])
  });
  ngOnInit() {

  }

  get legajo() { return this.alumnoForm.get('legajo'); }
  get nombre() { return this.alumnoForm.get('nombre'); }
  get apellido() { return this.alumnoForm.get('apellido'); }
  get nacimiento() { return this.alumnoForm.get('nacimiento'); }
  get dni() { return this.alumnoForm.get('dni'); }
  get telefono() { return this.alumnoForm.get('telefono'); }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.alumnoService.cargarAlumnos(this.alumnoForm.value);
  }

}
