import { Component, OnInit } from '@angular/core';

export interface MateriasPrimero {
  nombre: string;
  regimen: string;
  hs: number;
}

const ELEMENT_MATERIA1: MateriasPrimero[] = [
  { nombre: 'Comunicación', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional I', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Matemática', regimen: 'Anual', hs: 4 },
  { nombre: 'Inglés Técnico I', regimen: 'Anual', hs: 3 },
  { nombre: 'Psicosociología de las Organizaciones', regimen: 'Anual', hs: 3 },
  { nombre: 'Modelo de Negocios', regimen: 'Anual', hs: 3 },
  { nombre: 'Arquitectura de las Computadoras', regimen: 'Anual', hs: 4 },
  { nombre: 'Gestión de Software I', regimen: 'Anual', hs: 4 },
  { nombre: 'Ánalisis de Sistemas Organizacionales', regimen: 'Anual', hs: 5 },
];

export interface MateriasSegundo {
  nombre: string;
  regimen: string;
  hs: number;
}

const ELEMENT_MATERIA2: MateriasSegundo[] = [
  { nombre: 'Problemáticas Socio Contempráneas', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional II', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Inglés Técnico II', regimen: 'Anual', hs: 3 },
  { nombre: 'Innovación y Desarrollo Emprendedor', regimen: 'Anual', hs: 3 },
  { nombre: 'Estadística', regimen: 'Anual', hs: 3 },
  { nombre: 'Gestión de Software II', regimen: 'Anual', hs: 4 },
  { nombre: 'Estrategias de Negocios', regimen: 'Anual', hs: 4 },
  { nombre: 'Desarollo de Sistemas', regimen: 'Anual', hs: 5 },
  { nombre: 'Práctica Profesionalizante I', regimen: 'Anual', hs: 4 },
];

export interface MateriasTercero {
  nombre: string;
  regimen: string;
  hs: number;
}

const ELEMENT_MATERIA3: MateriasTercero[] = [
  { nombre: 'Ética y Responsabilidad Social', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Derecho y Legislación Laboral', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Redes y Comunicación', regimen: 'Anual', hs: 3 },
  { nombre: 'Seguridad de los Sistemas', regimen: 'Anual', hs: 3 },
  { nombre: 'Base de Datos I', regimen: 'Anual', hs: 4 },
  { nombre: 'Sistema de Información Gerencial', regimen: 'Anual', hs: 4 },
  { nombre: 'Desarrollo de Sistemas Web', regimen: 'Anual', hs: 5 },
  { nombre: 'Práctica Profesionalizante II', regimen: 'Anual', hs: 6 },
];

@Component({
  selector: 'app-af',
  templateUrl: './af.component.html',
  styleUrls: ['./af.component.scss']
})
export class AfComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'regimen', 'hs'];
  dataMateria1 = ELEMENT_MATERIA1;
  dataMateria2 = ELEMENT_MATERIA2;
  dataMateria3 = ELEMENT_MATERIA3;

  constructor() { }

  ngOnInit() {
  }

}
