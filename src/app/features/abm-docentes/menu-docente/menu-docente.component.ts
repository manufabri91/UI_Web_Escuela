import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/core/models/docente';
import { DocenteService } from 'src/app/core/services/docente/docente.service';

@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.component.html',
  styleUrls: ['./menu-docente.component.scss']
})
export class MenuDocenteComponent implements OnInit {

  public displayedColumns: string[] = ['legajo', 'nombre', 'apellido', 'nacimiento', 'dni', 'telefono', 'modificar', 'eliminar'];
  public docentes: Docente[];

  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
    this.docenteService.listarDocentes().subscribe(response => {
      this.docentes = response;
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }
  
  eliminarDocente(legajo: number) {
    this.docenteService.borrarDocente(legajo).subscribe(response => {
      this.docenteService.listarDocentes().subscribe(docentes => {
        this.docentes = docentes;
      });
    },
    error => {
      console.log(`Error: ${error}`);
      // TODO: mostrar toaster?
    });
  }

}
