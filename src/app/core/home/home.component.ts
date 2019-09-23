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

   this.images.push({path: '/assets/img/foto2arreglada.jpg', titulo: 'Terciario Méndez', desc: ''});
   this.images.push({path: '/assets/img/foto1arreglada.jpg', titulo: 'Terciario Méndez', desc: ''});
  }

  ngOnInit() {
  }

}
