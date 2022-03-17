import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItem=0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(data=>{ this.totalItem=data.length })
  }

}
