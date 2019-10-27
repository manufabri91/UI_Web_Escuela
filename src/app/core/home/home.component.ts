import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NoticiaService } from '../services/noticias/noticia.service';
import { Noticia } from '../models/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulares: Noticia[];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [];

  constructor(private noticiaService: NoticiaService, config: NgbCarouselConfig) {
   config.showNavigationArrows = true;
   config.showNavigationIndicators = true;

   this.images.push({path: '/assets/img/img1.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img2.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img3.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img4.jpg', titulo: '', desc: ''});
   this.images.push({path: '/assets/img/img5.jpg', titulo: '', desc: ''});
  }

  ngOnInit() {
    this.noticiaService.listarNoticias().subscribe(response => {
      this.titulares = response.filter(noticia => noticia.importante).slice(-3).reverse();
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
