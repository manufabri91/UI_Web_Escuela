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

   this.images.push({path: '/assets/img/img1.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img2.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img3.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img4.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img5.jpg', titulo: '', desc: ''});
  }

  ngOnInit() {
  }

}
