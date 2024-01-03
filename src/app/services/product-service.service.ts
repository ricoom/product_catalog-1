import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
const url=`https://dummyjson.com/products/`

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  constructor(private http:HttpClient) { }

  public getProducts() : Observable<Product[]> {
    return this.http.get<any>(url).pipe(map((Object)=>Object.products))
  }
  public findOne(id:any): Observable<Product>{
return this.http.get<any>(`${url}/${id}`)
  }
  public getCategories():Observable<any>{
    return this.http.get<any>(`${url}/categories`)

  }
  public getByCategory(category:any){
    return this.http.get<any>(`${url}/category/${category}`).pipe(map((Object)=>Object.products))
  }
}
