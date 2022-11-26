import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  public filterCategory:any;
  searchKey:string = "";
  
  constructor(private productservice: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productservice.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res
      this.productList.forEach((a:any) => {
        if(a.productCategory  === 'Women' || a.productCategory === 'Men')
        a.productCategory ="fashion"
        if(a.productCategory  === 'Health')
        a.productCategory ="health"
        if(a.productCategory  === 'Grocery')
        a.productCategory ="grocery"
        if(a.productCategory  === 'Mobile Accessories'|| a.productCategory === 'Headphones')
        a.productCategory ="electronics"
        if(a.productCategory  === 'Jewellery')
        a.productCategory ="jewellery"
        
        

        Object.assign(a,{quantity:1,total:a.productRate});
      
        
      });
     
      console.log(this.productList);
      
    });
   
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    localStorage.getItem('cartvalue');
   
    
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.productCategory == category || category==''){
        return a;
      }
    })

  }
  // loggedIn(){
  //   return localStorage.getItem('token');
  // }
  // onLogout(){
  //   localStorage.removeItem('token')
  // }

}
