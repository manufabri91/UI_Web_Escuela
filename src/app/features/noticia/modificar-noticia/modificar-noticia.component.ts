import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia';
import { NoticiaService } from 'src/app/core/services/noticias/noticia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.scss']
})
export class ModificarNoticiaComponent implements OnInit {

  idNovedad: number;

  constructor(private activatedRoute: ActivatedRoute,
              private noticiaService: NoticiaService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idNovedad = +params.get('id');
    });
  }

  actualizarNoticia(noticia: Noticia) {
    this.noticiaService.actualizarNoticias(noticia).subscribe(resp => {
      this.router.navigate(['/noticias/menu-noticias']);
    },
    err => {
      console.log(err);
      // TODO: mostrar toaster?
    });
  }

}
