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
  public alumno : Alumno;
	@Output()
  private formSubmitted : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private alumnoForm: FormGroup; 


  constructor(private fb: FormBuilder) {
		this.alumnoForm = this.fb.group({
      legajo: new FormControl(this.alumno.legajo,[
        Validators.required,
        Validators.maxLength(25)
      ]),
      nombre: new FormControl(this.alumno.nombre,[
        Validators.required,
        Validators.maxLength(25)
      ]),
      apellido: new FormControl(this.alumno.apellido,[
        Validators.required,
        Validators.maxLength(25)
      ]),
      nacimiento: new FormControl(this.alumno.nacimiento,[
        Validators.required,
        Validators.maxLength(25)
      ]),
      dni: new FormControl(this.alumno.dni,[
        Validators.required,
        Validators.maxLength(25)
      ]),
      telefono: new FormControl(this.alumno.telefono,[
        Validators.required,
        Validators.maxLength(25)
      ])
		});
	}

  ngOnInit(): void {
		
	}
  
  get legajo() { return this.alumnoForm.get('legajo'); }
  get nombre() { return this.alumnoForm.get('nombre'); }
  get apellido() { return this.alumnoForm.get('apellido'); }
  get nacimiento() { return this.alumnoForm.get('nacimiento'); }
  get dni() { return this.alumnoForm.get('dni'); }
  get telefono() { return this.alumnoForm.get('telefono'); }
  submitted = false;
  onSubmit(){
    if (this.alumnoForm.valid) {
        this.submitted = true;
        this.formSubmitted.emit(this.alumnoForm);
    }else{
      this.markAllFormFieldsAsTouched(this.alumnoForm);
    }
  }

  markAllFormFieldsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(
      (control) => {
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
        } else if (control instanceof FormGroup || control instanceof FormArray) {
          this.markAllFormFieldsAsTouched(control);
        }
      });
  }

}
