import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/core/services/docente/docente.service';
import { FormGroup } from '@angular/forms';
import { Docente } from 'src/app/core/models/docente';

@Component({
  selector: 'app-modificar-docente',
  templateUrl: './modificar-docente.component.html',
  styleUrls: ['./modificar-docente.component.scss']
})
export class ModificarDocenteComponent implements OnInit {

  legajo: number;

  constructor(private activatedRoute: ActivatedRoute,
              private docenteService: DocenteService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.legajo = +params.get('legajo');
    });
  }

  actualizarDocente(formGroup: FormGroup) {
    const docente = new Docente(formGroup.value);
    this.docenteService.actualizarDocentes(docente).subscribe(resp => {
      this.router.navigate(['/abm-docentes/menu-docente']);
    },
    err => {
      console.log(err);
      // TODO: mostrar toaster?
    });
  }

}
