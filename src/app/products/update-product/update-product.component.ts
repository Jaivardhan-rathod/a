import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productID:number=0;
  productDetails:Product;

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
        this.productID=data.id; console.log("id from link:",this.productID)});

    this.productService.showProduct(this.productID).subscribe(data => {this.productDetails=data[0];
        console.log(this.productDetails);});
  }

  updateProduct(form:any){
    
    
    const updateProduct ={
      id:form.value.product_Id,
      productid:form.value.product_Id,
      categoryId:form.value.product_category,
      productName:form.value.product_name,
      description:form.value.product_description,
      rating:form.value.product_rating,
      price:form.value.product_price,
      productImg:'',
      isavailable:form.value.product_available,
      color:form.value.product_color,
      review:form.value.product_review
    };

    console.log("updateProduct",updateProduct);
    this.productService.updateProduct(this.productID,updateProduct).subscribe(data => {console.log(data)});



  }


}
