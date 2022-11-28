import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  
  productId = 0;
  productDetails: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

    c1 = 'c1';

  ngOnInit(): void {
  }

}
