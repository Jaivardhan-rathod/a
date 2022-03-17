import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { category } from '../site-layout/category';
import{map}from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

 
  constructor(private httpClient:HttpClient) { }

  addProduct(product:Product):Observable<Product>
  {
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl, product)
  }
  

  viewProduct():Observable<Product[]>{
    const baseUrl="http://localhost:3000/product/";
    return this.httpClient.get<Product[]>(baseUrl)
    
   }

  showProduct(id: any):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product?productid="+id;
    return this.httpClient.get<Product[]>(baseUrl)
     
   }

  //  showProductToUpdate(id: any):Observable<Product>{
  //   const baseUrl="http://localhost:3000/product?productid="+id;
  //   return this.httpClient.get<Product>(baseUrl)
     
  //  }

   updateProduct(productID: any, productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.put<Product>(baseUrl, productBody)
    
   }

   deleteProduct(jai: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+jai;
    return this.httpClient.delete<Product>(baseUrl) //.pipe(map((res:any)=>{return res;}))
    
   }

   searchCategoryProduct(id: any):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product?categoryId="+id;
    return this.httpClient.get<Product[]>(baseUrl)
    
   }

   getCategory(){
    const categoryUrl="http://localhost:3000/category";
    return this.httpClient.get<category[]>(categoryUrl)
   }

}


