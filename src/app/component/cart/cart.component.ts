import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  public products: any =[];
  public grandTotal !: number;



  formProfile = new FormGroup({

    userid : new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    emailid: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    productId: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    grandTotal: new FormControl('', Validators.required),

    
  })


  updateForm() {

    if (this.formProfile.valid) {
      console.log(this.formProfile.value);
      this.productservice.saveOrder(this.formProfile.value,this.http);
      location.reload();
    }
    
    // console.log();
    // console.log(event.target.value);
    
    // console.log(event.target.username.value);
    // console.log(event.target.userid.value);
    // console.log(event.target.address.value);
    
    
    
    
    // if (this.formProfile.valid) {
    //   console.log(this.formProfile.value);
    //   this.userservice.updateUserById(this.formProfile.value,this.http);
    // } else {
    //   console.log("There is more error")
    // }
  }


prodId = '';
prodname = '';
prodCat = '';
prodRate = '';
productId:string[]=[];
productName:string[] = [];
productCategory:string[]=[];
productRate: string[]=[];

  constructor(private cartservice : CartService, private http: HttpClient, private productservice: ProductService) { this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
   //console.log(res);
    res.forEach((x:any)=>{

      this.productId.push(x.productId);
      this.productName.push(x.productName);
      this.productCategory.push(x.productCategory);
     this.productRate.push(x.productRate);

  
    })

    for (let i = 0; i < this.productId.length; i++) {
      this.prodId = this.prodId.concat(this.productId[i]," ");
     
      
  }
  //console.log( this.prodId);

  for (let i = 0; i < this.productName.length; i++) {
    this.prodname = this.prodname.concat(this.productName[i], " ");
   
    
}
//console.log( this.prodname);

for (let i = 0; i < this.productCategory.length; i++) {
  this.prodCat = this.prodCat.concat(this.productCategory[i], " ");
 
  
}
//console.log( this.prodCat);


for (let i = 0; i < this.productRate.length; i++) {
  this.prodRate = this.prodRate.concat(this.productRate[i], " ");
 
  
}
//console.log( this.prodRate );

    
    
      
      this.grandTotal = this.cartservice.getTotalPrice();
      //console.log(this.grandTotal);
   
      
    }) }
    
   
    

  ngOnInit(): void {
   
    
  }

  // a=localStorage.getItem('fororder');
  userid = localStorage.getItem('forupdate')
  username = localStorage.getItem('name')
  emailid = localStorage.getItem('token')
  

  removeItem(item: any){
    this.cartservice.removeCartItem(item);
    //localStorage.removeItem('cartvalue')
  }
  emptycart(){
    this.cartservice.removeAllCart();
  }



// id=JSON.parse(this.prodId);


// order(id:any){

// console.log();

// }

  

edit(){
  //console.log("xjg");

  // var service = this.userservice.getUserById(id,this.http);

  // service.subscribe(data=>{

    this.formProfile.controls["userid"].setValue(this.userid)
    this.formProfile.controls["username"].setValue(this.username);
    this.formProfile.controls["emailid"].setValue(this.emailid);
    //this.formProfile.controls["address"].setValue(this.address);
     this.formProfile.controls["productId"].setValue(this.prodId);
     this.formProfile.controls["productName"].setValue(this.prodname);
     this.formProfile.controls["productCategory"].setValue(this.prodCat);
     this.formProfile.controls["grandTotal"].setValue(this.grandTotal.toString());

  // })
  
}




}
