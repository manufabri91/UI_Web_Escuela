import { Component, OnInit } from '@angular/core';

export interface MateriasPrimero {
  nombre: string;
  regimen: string;
  hs: number;
}

const ELEMENT_MATERIA1: MateriasPrimero[] = [
  { nombre: 'Comunicación', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional I', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Matemática', regimen: 'Anual', hs: 3 },
  { nombre: 'Física Aplicada a las Tecnologías de la Información', regimen: 'Anual', hs: 3 },
  { nombre: 'Administración', regimen: 'Anual', hs: 3 },
  { nombre: 'Inglés Técnico', regimen: 'Anual', hs: 4 },
  { nombre: 'Arquitectura de las Computadoras', regimen: 'Anual', hs: 4 },
  { nombre: 'Lógica y Programación', regimen: 'Anual', hs: 4 },
  { nombre: 'Infraestructura de Redes I', regimen: 'Anual', hs: 4 },
];

export interface MateriasSegundo {
  nombre: string;
  regimen: string;
  hs: number;
}

const ELEMENT_MATERIA2: MateriasSegundo[] = [
  { nombre: 'Problemáticas Socio Contempráneas', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional II', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Innovación y Desarrollo Emprendedor', regimen: 'Anual', hs: 3 },
  { nombre: 'Estadística', regimen: 'Anual', hs: 3 },
  { nombre: 'Sistemas Operativos', regimen: 'Anual', hs: 4 },
  { nombre: 'Algoritmos y Estructuras de Datos', regimen: 'Anual', hs: 4 },
  { nombre: 'Base de Datos', regimen: 'Anual', hs: 4 },
  { nombre: 'Infraestructura de Redes II', regimen: 'Anual', hs: 4 },
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
  { nombre: 'Administración de Base de Datos', regimen: 'Anual', hs: 4 },
  { nombre: 'Integración y Migración de Datos', regimen: 'Anual', hs: 4 },
  { nombre: 'Seguridad de los Sistemas', regimen: 'Anual', hs: 5 },
  { nombre: 'Administración de Sistemas Operativos y Redes', regimen: 'Anual', hs: 4 },
  { nombre: 'Práctica Profesionalizante II', regimen: 'Anual', hs: 8 },
];

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'regimen', 'hs'];
  dataMateria1 = ELEMENT_MATERIA1;
  dataMateria2 = ELEMENT_MATERIA2;
  dataMateria3 = ELEMENT_MATERIA3;

  constructor() { }

  ngOnInit() {
  }

}
