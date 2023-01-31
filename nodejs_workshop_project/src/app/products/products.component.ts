import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Product[] = [
    {name:'chaises', stock:4, price:10},
    {name:'tables', stock:1, price:100},
    {name:'yacht', stock:0, price:1}
  ];
  decrement = decrement_number;
}
export function decrement_number(nmbr:number) {
  return nmbr - 1;
}
