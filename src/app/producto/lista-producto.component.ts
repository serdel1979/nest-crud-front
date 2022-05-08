import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ServiceProductoService } from '../services/service-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ServiceProductoService
    ) { }

  ngOnInit():void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }



  delete(id?:number):void{
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: "Si confirma no hay vuelta atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(id).subscribe(res => this.cargarProductos());
        Swal.fire(
          'Borrado!',
          'Producto eliminado',
          'success'
        )
      }
    })
  }
}
