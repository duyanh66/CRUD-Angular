import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  getAllproduct(): Observable<any> {
    return this.http.get(`${this.API}`)
  }
  getOneproduct(id: any): Observable<any> {
    return this.http.get(`${this.API}/${id}`)
  }
  removeproduct(id: any): Observable<any> {
    return this.http.delete(`${this.API}/${id}`)
  }
  addproduct(product: any): Observable<any> {
    return this.http.post(`${this.API}`, product)
  }
  editproduct(product: any): Observable<any> {
    return this.http.put(`${this.API}/${product.id}`, product)
  }
}
