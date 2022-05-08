export class Producto {
    id?: number;
    name: string;
    precio: number | undefined;

    constructor(nombre: string, precio: number | undefined) {
        this.name = nombre;
        this.precio = precio;
    }
}
