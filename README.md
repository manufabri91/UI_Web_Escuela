# EscuelaUrquiza

Modernización del Sitio institucional de la Esc. N49 "J. J. Urquiza"

## Primer ejecucion
Prerequisitos:
- Antes de comenzar, asegurarse de que el ambiente de desarrollo incluya Node.js y el gestor de paquetes npm (para conseguirlos, ir a nodejs.org).
- Antes de comenzar, asegurarse de que el ambiente de desarrollo incluya la CLI de Angular (para instalarla globalmente correr `npm install -g @angular/cli`)

Si cumple los prerequisitos, para ejecutar el proyecto por primera vez luego de su clonacion, ejecutar `npm install` en una consola dentro de la carpeta del proyecto. Esto instalara las dependencias necesarias para la ejecucion.

## DEV server

Para ejecutar la web en forma local en la consola correr `ng serve`. Este comando inciara un servidor local y servira el codigo. Navegar a `http://localhost:4200/`.
La app recargara automaticamente al detectar cambios en el código

## Code scaffolding

Correr `ng generate component app-nombre-componente` para crear nuevos componentes. Tambien se pueden generar otros artefactos `ng generate directive|pipe|service|class|guard|interface|enum|module`. Referirse a la documentacion

## Proceso de compilacion

Correr `ng build` para compilar el proyecto con fines de desarrollo. El codigo compilado se enviará a la carpeta `dist/`. Agregar el parámetro `--prod` para una compilación con fines productivos.

## Correr unit tests

Ejecutar `ng test` para correr los test con [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Ejecutar `ng e2e` para ejecutar test de regresion con [Protractor](http://www.protractortest.org/).

## Further help

Para mayor informacion  use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
