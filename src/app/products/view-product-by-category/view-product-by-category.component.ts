import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {

  productList: Product[]=[];
  searchCategory : category[]=[];
  
  
  constructor(private activatedRoute:ActivatedRoute ,private productService:ProductService) { }

  ngOnInit(): void {
    console.log("view product by category")

    console.log("view product by category activated route")
    this.activatedRoute.params.subscribe(data => {this.searchCategory=data.id, console.log("category component",this.searchCategory)})

    //this.productService.getCategory().subscribe(data=>{this.searchCategory=data, console.log(this.searchCategory)})

    

    console.log("view product by category search method")
    this.productService.searchCategoryProduct(this.searchCategory).subscribe(data=>{this.productList=data, console.log(this.productList)} )
    
  }

}
