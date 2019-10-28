import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { NoticiaService } from 'src/app/core/services/noticias/noticia.service';
import { Noticia } from 'src/app/core/models/noticia';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.scss']
})
export class FormNoticiaComponent implements OnInit {

  @Input()
  public idEdit: number;

  @Output()
  private formSubmitted: EventEmitter<Noticia> = new EventEmitter<Noticia>();
  private noticiaForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private noticiaService: NoticiaService) {
    this.noticiaForm = this.fb.group({
      id_novedad: new FormControl('', [
        Validators.required
      ]),
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(40)
      ]),
      cuerpo: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      resumen: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      importante: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    const noticiaControls = this.noticiaForm.controls;
    if (this.idEdit) {
      this.noticiaService.getNoticia(this.idEdit).subscribe(noticia => {
        noticiaControls.id_novedad.setValue(noticia.id_novedad);
        noticiaControls.titulo.setValue(noticia.titulo);
        noticiaControls.cuerpo.setValue(noticia.cuerpo);
        noticiaControls.resumen.setValue(noticia.resumen);
        noticiaControls.importante.setValue(noticia.importante ? 'I' : 'NI');
      });
    } else {
      noticiaControls.id_novedad.disable();
    }
  }
  get id_novedad() { return this.noticiaForm.get('id_novedad'); }
  get titulo() { return this.noticiaForm.get('titulo'); }
  get cuerpo() { return this.noticiaForm.get('cuerpo'); }
  get resumen() { return this.noticiaForm.get('resumen'); }
  get importante() { return this.noticiaForm.get('importante'); }

  onSubmit() {
    if (this.noticiaForm.valid) {
      this.noticiaForm.controls.importante.setValue(this.importante.value === 'I');
      const noticia = new Noticia(this.noticiaForm.value);
      this.formSubmitted.emit(noticia);
    } else {
      this.markAllFormFieldsAsTouched(this.noticiaForm);
    }
  }

  markAllFormFieldsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(
      (control) => {
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup || control instanceof FormArray) {
          this.markAllFormFieldsAsTouched(control);
        }
      });
  }

}

