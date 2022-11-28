import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any[] =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){

    // const ls1 = JSON.parse(localStorage.getItem("totalmoney")||'{}');
    const ls = JSON.parse(localStorage.getItem("cartvalue")||'{}');
       if(ls) this.productList.next(ls);
       
    
    return this.productList.asObservable();  

  }
  setProduct(product:any){  
    this.cartItemList.push(...product);
    this.productList.next(product);
    
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    localStorage.setItem('cartvalue', JSON.stringify(this.cartItemList))
    

  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
      // console.log(grandTotal);
      localStorage.setItem('totalmoney',JSON.stringify(grandTotal))
      
    })
    return grandTotal;
  }
  removeCartItem(product: any){

    
    this.cartItemList.map((a:any, index:any)=>{
      if(product.productId === a.productId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList =[]
    this.productList.next(this.cartItemList);
    localStorage.removeItem("cartvalue")
  }
}
