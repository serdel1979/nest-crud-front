import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {

  productoURL = environment.productosUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.productoURL}`);
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoURL}/${id}`);
  }

  
  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(`${this.productoURL}`, producto);
  }

  public update(id: number, producto?: Producto): Observable<any> {
    return this.httpClient.put<any>(`${this.productoURL}/${id}`, producto);
  }

  public delete(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.productoURL}/${id}`);
  }
}
