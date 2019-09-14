import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno';
import { IAlumno } from 'src/app/shared/IAlumno';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent implements OnInit {

  @Input()
  public alumno: Alumno;

  @Output()
  private formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private alumnoForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
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
    const alumnoControls = this.alumnoForm.controls;
    if (this.alumno) {
      alumnoControls.legajo.setValue(this.alumno.legajo);
      alumnoControls.nombre.setValue(this.alumno.nombre);
      alumnoControls.apellido.setValue(this.alumno.apellido);
      alumnoControls.nacimiento.setValue(this.alumno.nacimiento);
      alumnoControls.dni.setValue(this.alumno.dni);
      alumnoControls.nacimiento.setValue(this.alumno.telefono);
    } else{
      alumnoControls.legajo.disable();
    }
  }
  get legajo() { return this.alumnoForm.get('legajo'); }
  get nombre() { return this.alumnoForm.get('nombre'); }
  get apellido() { return this.alumnoForm.get('apellido'); }
  get nacimiento() { return this.alumnoForm.get('nacimiento'); }
  get dni() { return this.alumnoForm.get('dni'); }
  get telefono() { return this.alumnoForm.get('telefono'); }
  submitted = false;
  onSubmit() {
    if (this.alumnoForm.valid) {
      this.submitted = true;
      this.formSubmitted.emit(this.alumnoForm);
    } else {
      this.markAllFormFieldsAsTouched(this.alumnoForm);
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
