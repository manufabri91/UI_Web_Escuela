export class Noticia {

    // tslint:disable-next-line: variable-name
    id_novedad: number;
    titulo: string;
    cuerpo: string;
    resumen: string;
    importante: boolean;

    constructor(rawjson?: any) {
        Object.assign(this, rawjson);
    }
}
