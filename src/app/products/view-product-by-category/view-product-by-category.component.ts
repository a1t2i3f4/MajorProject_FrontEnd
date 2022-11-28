import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  searchCategory!: string;
  productList!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {
    console.log(data);
    this.searchCategory = data['id'];
    console.log(this.searchCategory);
    this.productsService.searchCategoryProducts(this.searchCategory).subscribe((categoryData: any) => {
      console.log(categoryData);
      this.productList = categoryData;
    });
  });

  }

}
