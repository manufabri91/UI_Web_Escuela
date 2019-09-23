import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlumnoComponent } from './alta-alumno.component';

describe('GestionAlumnoComponent', () => {
  let component: AltaAlumnoComponent;
  let fixture: ComponentFixture<AltaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
