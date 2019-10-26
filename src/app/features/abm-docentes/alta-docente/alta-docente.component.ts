import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/core/services/docente/docente.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Docente } from 'src/app/core/models/docente';

@Component({
  selector: 'app-alta-docente',
  templateUrl: './alta-docente.component.html',
  styleUrls: ['./alta-docente.component.scss']
})
export class AltaDocenteComponent implements OnInit {


  constructor(private docenteService: DocenteService, private router: Router) { }

  ngOnInit() {

  }

  public submitForm(formGroup: FormGroup): void {
    const docente = new Docente(formGroup.value);
    this.docenteService.cargarDocentes(docente).subscribe(result => {
        this.router.navigate(['/abm-docentes/menu-docente']);
      });
  }

}
