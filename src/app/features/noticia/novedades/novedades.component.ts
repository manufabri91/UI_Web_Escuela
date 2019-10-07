import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/core/services/noticias/noticia.service';
import { Noticia } from 'src/app/core/models/noticia';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {

  noticias: Noticia[];
  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.noticiaService.listarNoticias().subscribe(response => {
      this.noticias = response;
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
