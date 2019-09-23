import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/core/models/alumno';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {


  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {

  }

  public submitForm(formGroup: FormGroup): void {
    const alumno = new Alumno(formGroup.value);
    this.alumnoService.cargarAlumnos(alumno).subscribe(result => {
        this.router.navigate(['/menu-alumno']);
      });
  }

}
