import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { AlumnoService } from '../services/alumno.service';
import { map } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alumnos: Alumno[];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [];



  constructor(private alumnoService: AlumnoService, config: NgbCarouselConfig) {
   // customize default values of carousels used by this component tree
   config.showNavigationArrows = true;
   config.showNavigationIndicators = true;

   this.images.push({path: '/assets/img/1.jpg', titulo: 'ESCUELA', desc: 'escuelita'});
  }

  ngOnInit() {
  }

  testapi() {

    this.alumnoService.listarAlumnos()
    .pipe(
      map(resp => this.alumnos = resp)
    ).subscribe();
  }
}
