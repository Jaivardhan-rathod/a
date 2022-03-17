import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : Product[] =[]
  public productList = new BehaviorSubject<any>([])

  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(producT:any){
    this.cartItemList.push(...producT)
    this.productList.next(producT);
  }

  addToCart(producT:any){
    this.cartItemList.push( producT);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("add to cart",this.cartItemList)

  }

  getTotalPrice():number{
    let grandTotal :number=0;
    this.cartItemList.map((a:Product)=>{
      grandTotal=a.price+ grandTotal; 
    })
    return grandTotal;
  }

  removeCartItem(producT:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(producT.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
