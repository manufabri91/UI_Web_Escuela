import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/shared/IAlumno';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/core/models/alumno';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {


  constructor(private alumnoService : AlumnoService) { }

  ngOnInit() {

  }

  public submitForm(formGroup: FormGroup) : void {
    this.alumnoService.cargarAlumnos(formGroup.value);
	}
  onSubmit() { 
   
  }
 
}
