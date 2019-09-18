export class Usuario {
    id: number;
    username: string;
    password: string;

    constructor(rawjson?: any) {
        Object.assign(this, rawjson);
    }
}
