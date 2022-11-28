import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((data: any) => {
      this.categoryList = data;
    });
  }

}
