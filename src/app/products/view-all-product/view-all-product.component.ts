import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {

  productList : Product[]=[];
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log("view all product")
    this.productService.viewProduct().subscribe((data)=>{this.productList=data, console.log(this.productList)})
    
  }
  
}
