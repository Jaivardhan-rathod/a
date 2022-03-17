import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any){
    console.log("form value: ",form.value);

    let newProduct =
    {
      id: form.value.product_Id,
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

    console.log("new product: ",newProduct);
    this.productService.addProduct(newProduct).subscribe(data => {console.log(data)})
  
    //this.http.post<Product[]>("http://localhost:3000/product", newProduct).subscribe(data => {console.log(data)})
  }

}
