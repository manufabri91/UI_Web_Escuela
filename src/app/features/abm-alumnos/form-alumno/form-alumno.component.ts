import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AlumnoService } from 'src/app/core/services/alumno/alumno.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent implements OnInit {

  @Input()
  public legajoEdit: number;

  @Output()
  private formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private alumnoForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
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
    if (this.legajoEdit) {
      this.alumnoService.getAlumno(this.legajoEdit).subscribe(alumno => {
        alumnoControls.legajo.setValue(alumno.legajo);
        alumnoControls.nombre.setValue(alumno.nombre);
        alumnoControls.apellido.setValue(alumno.apellido);
        alumnoControls.nacimiento.setValue(alumno.nacimiento);
        alumnoControls.dni.setValue(alumno.dni);
        alumnoControls.telefono.setValue(alumno.telefono);
      });
    } else {
      alumnoControls.legajo.disable();
    }
  }
  get legajo() { return this.alumnoForm.get('legajo'); }
  get nombre() { return this.alumnoForm.get('nombre'); }
  get apellido() { return this.alumnoForm.get('apellido'); }
  get nacimiento() { return this.alumnoForm.get('nacimiento'); }
  get dni() { return this.alumnoForm.get('dni'); }
  get telefono() { return this.alumnoForm.get('telefono'); }

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
