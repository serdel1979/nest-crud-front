export class Producto {
    id?: number;
    name: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.name = nombre;
        this.precio = precio;
    }
}
