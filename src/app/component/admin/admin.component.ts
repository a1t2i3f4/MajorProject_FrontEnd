import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { RegistrationService } from 'src/app/service/registration.service';
//  import { UpdateproductComponent } from '../updateproduct/updateproduct.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[RegistrationService]
})
export class AdminComponent implements OnInit {
  public productList : any;
  public filterCategory:any;
  searchKey:string = "";

  // updateproductName:any;
  // updateproductCategory:any;
  // updateproductRate:any;
  // updateproductdescription:any;
  // updateproductrating:any;
  // updateproductimageurl:any;


  demoVar :any = []
  toShow :boolean = false;
 
  


  formProfile = new FormGroup({

    productId : new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    productRate: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    imageurl: new FormControl('', Validators.required)
  })

  updateStudnetForm() {
    console.log("clicked --->", this.formProfile.value);
    
    if (this.formProfile.valid) {
      console.log(this.formProfile.value);
      this.productservice.updateUserById(this.formProfile.value,this.http).subscribe(
        ans=>{
          console.log(ans)
          
        },err=>{
          console.log(err);
        }
      );
    } else {
      console.log("There is more error")
    }
    location.reload();
  }
  








  constructor(private http: HttpClient, private productservice: ProductService, private cartService:CartService, private dialog: MatDialog,) { }

  formProfile1 = new FormGroup({

    productName: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    productRate: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    imageurl: new FormControl('', Validators.required)

  })



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
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.productCategory == category || category==''){
        return a;
      }
    })

  }



 

  submitStudnetForm() {
    // console.log("abcd");
    
    if (this.formProfile1.valid) {
      console.log(this.formProfile1.value);
      this.productservice.saveUser(this.formProfile1.value,this.http);
    } else {
      console.log("There is more error")
    }

    location.reload();
  }

 

  deleteData(id:any){
    console.log("data",id)
    return this.productservice.deleteUser(id,this.http);
    location.reload();
  }


  editData(id:any){
  //  console.log('sdf');
   
    var service = this.productservice.getUserById(id,this.http);
    console.log(service);
    
    
    
    service.subscribe(data=>{
      console.log('hh',data);
      
      this.formProfile.controls["productId"].setValue(id)
      this.formProfile.controls["productName"].setValue(data.productName);
      this.formProfile.controls["productCategory"].setValue(data.productCategory);
      this.formProfile.controls["productRate"].setValue(data.productRate);
      this.formProfile.controls["description"].setValue(data.description);
      this.formProfile.controls["rating"].setValue(data.rating);
      this.formProfile.controls["imageurl"].setValue(data.imageurl);
    })
   
    
  }
  


  
 
}
