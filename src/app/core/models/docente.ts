export class Docente {
    legajo: number;
    nombre: string;
    apellido: string;
    nacimiento: Date;
    dni: string;
    telefono: string;

    constructor(rawjson?: any) {
        Object.assign(this, rawjson);
    }
}
