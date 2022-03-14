import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

public  categoryList: category[]=[];
  
  
  constructor(private productsService: ProductService ) 
  { 

  }


  ngOnInit(): void 
  {
    console.log("sidebar")
    this.productsService.getCategory().subscribe((data) => {this.categoryList=data, console.log(this.categoryList)});
  }

  
}

