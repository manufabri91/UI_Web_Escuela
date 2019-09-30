import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaNoticiaComponent } from './carga-noticia.component';

describe('CargaNoticiaComponent', () => {
  let component: CargaNoticiaComponent;
  let fixture: ComponentFixture<CargaNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
