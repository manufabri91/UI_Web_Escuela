import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';

const ELEMENT_MATERIA1: Materia[] = [
  { nombre: 'Comunicación', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional I', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Matemática', regimen: 'Anual', hs: 4 },
  { nombre: 'Inglés Técnico I', regimen: 'Anual', hs: 3 },
  { nombre: 'Administración', regimen: 'Anual', hs: 3 },
  { nombre: 'Tecnología de la Información', regimen: 'Anual', hs: 3 },
  { nombre: 'Lógica y Estructura de Datos', regimen: 'Anual', hs: 4 },
  { nombre: 'Ingeniería de Software I', regimen: 'Anual', hs: 4 },
  { nombre: 'Sistemas Operativos', regimen: 'Anual', hs: 4 },
];


const ELEMENT_MATERIA2: Materia[] = [
  { nombre: 'Problemáticas Socio Contempráneas', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Unidad de Definición Institucional II', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Inglés Técnico II', regimen: 'Anual', hs: 3 },
  { nombre: 'Innovación y Desarrollo Emprendedor', regimen: 'Anual', hs: 3 },
  { nombre: 'Estadística', regimen: 'Anual', hs: 3 },
  { nombre: 'Programación I', regimen: 'Anual', hs: 6 },
  { nombre: 'Ingeniería de Software II', regimen: 'Anual', hs: 4 },
  { nombre: 'Base de Datos I', regimen: 'Anual', hs: 4 },
  { nombre: 'Práctica Profesionalizante I', regimen: 'Anual', hs: 4 },
];


const ELEMENT_MATERIA3: Materia[] = [
  { nombre: 'Ética y Responsabilidad Social', regimen: 'Cuatr. 1', hs: 3 },
  { nombre: 'Derecho y Legislación Laboral', regimen: 'Cuatr. 2', hs: 3 },
  { nombre: 'Redes y Comunicación', regimen: 'Anual', hs: 4 },
  { nombre: 'Innovación y Desarrollo Emprendedor', regimen: 'Anual', hs: 3 },
  { nombre: 'Programación II', regimen: 'Anual', hs: 6 },
  { nombre: 'Base de Datos II', regimen: 'Anual', hs: 4 },
  { nombre: 'Práctica Profesionalizante II', regimen: 'Anual', hs: 6 },
];

@Component({
  selector: 'app-ds',
  templateUrl: './ds.component.html',
  styleUrls: ['./ds.component.scss']
})
export class DsComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'regimen', 'hs'];
  dataMateria1 = ELEMENT_MATERIA1;
  dataMateria2 = ELEMENT_MATERIA2;
  dataMateria3 = ELEMENT_MATERIA3;

  constructor() { }

  ngOnInit() {
  }

}
