import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
    
  productID:number=0;
  public viewProduct:Product;
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

        console.log("view product")
        this.activatedRoute.params.subscribe(data => {this.productID=data.Id, console.log("id: ",this.productID)})
        
        // this.productID=this.activatedRoute.snapshot.params['id'];
        // console.log("show1: ",this.productID)

       
        this.productService.showProduct(this.productID).subscribe(data => {this.viewProduct=data[0], console.log("data:- ",this.viewProduct) });
      
  }

}
