import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDocenteComponent } from './alta-docente.component';

describe('AltaDocenteComponent', () => {
  let component: AltaDocenteComponent;
  let fixture: ComponentFixture<AltaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
