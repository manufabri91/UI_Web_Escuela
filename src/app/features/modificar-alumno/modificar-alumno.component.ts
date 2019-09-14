import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/core/models/alumno';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.scss']
})
export class ModificarAlumnoComponent implements OnInit {
  private readonly _alumnoService: AlumnoService;
  alumno : Alumno;
  constructor(private activatedRoute: ActivatedRoute,
              alumnoService : AlumnoService) { 
                this._alumnoService = alumnoService;
              }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.loadAlumno(id);      
    });
  }
  loadAlumno(id: number) : void {
    this._alumnoService.getAlumno(id).toPromise().then(elem => {
        this.alumno = elem;
      });
  }
  actualizarAlumno(formGroup: FormGroup){
    this._alumnoService.actualizarAlumnos(formGroup.value);
  }
}
