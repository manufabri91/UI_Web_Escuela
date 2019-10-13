import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia';
import { NoticiaService } from 'src/app/core/services/noticias/noticia.service';

@Component({
  selector: 'app-menu-noticia',
  templateUrl: './menu-noticia.component.html',
  styleUrls: ['./menu-noticia.component.scss']
})
export class MenuNoticiaComponent implements OnInit {

  public displayedColumns: string[] = ['id_novedad', 'titulo', 'cuerpo', 'resumen', 'importante', 'modificar', 'eliminar'];
  public noticias: Noticia[];

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

  eliminarNoticia(id: number) {
    this.noticiaService.borrarNoticia(id).subscribe(response => {
      this.noticiaService.listarNoticias().subscribe(noticias => {
        this.noticias = noticias;
      });
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
