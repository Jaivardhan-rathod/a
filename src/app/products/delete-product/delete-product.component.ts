import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  productID:number=0;
  

  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

        console.log("delete product")
        this.activatedRoute.params.subscribe(data=>{this.productID=data.productid, console.log("id: ",this.productID)})

        this.productService.deleteProduct(this.productID).subscribe(data => { console.log("Product has been Deleted ")})
    
  }

}
