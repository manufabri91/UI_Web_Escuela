import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DocenteService } from 'src/app/core/services/docente/docente.service';

@Component({
  selector: 'app-form-docente',
  templateUrl: './form-docente.component.html',
  styleUrls: ['./form-docente.component.scss']
})
export class FormDocenteComponent implements OnInit {

  
  @Input()
  public legajoEdit: number;
  
  @Output()
  private formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private docenteForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private docenteService: DocenteService) {
    this.docenteForm = this.fb.group({
      legajo: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      nacimiento: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      dni: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ])
    });
  }

  ngOnInit(): void {
    const docenteControls = this.docenteForm.controls;
    if (this.legajoEdit) {
      this.docenteService.getDocente(this.legajoEdit).subscribe(docente => {
        docenteControls.legajo.setValue(docente.legajo);
        docenteControls.nombre.setValue(docente.nombre);
        docenteControls.apellido.setValue(docente.apellido);
        docenteControls.nacimiento.setValue(docente.nacimiento);
        docenteControls.dni.setValue(docente.dni);
        docenteControls.telefono.setValue(docente.telefono);
      });
    } else {
      docenteControls.legajo.disable();
    }
  }
  get legajo() { return this.docenteForm.get('legajo'); }
  get nombre() { return this.docenteForm.get('nombre'); }
  get apellido() { return this.docenteForm.get('apellido'); }
  get nacimiento() { return this.docenteForm.get('nacimiento'); }
  get dni() { return this.docenteForm.get('dni'); }
  get telefono() { return this.docenteForm.get('telefono'); }

  onSubmit() {
    if (this.docenteForm.valid) {
      this.submitted = true;
      this.formSubmitted.emit(this.docenteForm);
    } else {
      this.markAllFormFieldsAsTouched(this.docenteForm);
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
