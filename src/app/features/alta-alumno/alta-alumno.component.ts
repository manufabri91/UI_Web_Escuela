import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/shared/IAlumno';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {
  alumno : IAlumno;
 
  constructor(
    // private postService : PostService
    ) { }

  ngOnInit() {
      this.alumno = {
        nombre : '',
        apellido : '',
        nacimiento : '',
        dni : '',
        telefono : ''
      };
  }
  submitted = false;

  onSubmit() { 
  this.submitted = true;
  }

}
