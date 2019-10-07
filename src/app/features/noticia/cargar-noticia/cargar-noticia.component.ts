import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia';
import { NoticiaService } from 'src/app/core/services/noticias/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-noticia',
  templateUrl: './cargar-noticia.component.html',
  styleUrls: ['./cargar-noticia.component.scss']
})
export class CargarNoticiaComponent implements OnInit {
  noticia: Noticia;
  importante: string;

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  ngOnInit() {
    this.noticia = new Noticia();
  }

  cargarNoticia() {
    this.noticia.importante = this.importante === 'I' ? true : false;
    this.noticiaService.cargarNoticias(this.noticia).subscribe(result => {
      this.router.navigate(['/noticias/menu-noticias']);
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
