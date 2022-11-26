import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RegistrationService } from 'src/app/service/registration.service';
import { ProductService } from 'src/app/service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[UsersService]
})
export class HeaderComponent implements OnInit {

  demoVar :any = []

  formProfile = new FormGroup({

    id : new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    money: new FormControl('', Validators.required)
    
  })

  updateForm() {
    if (this.formProfile.valid) {
      console.log(this.formProfile.value);
      this.userservice.updateUserById(this.formProfile.value,this.http);
    } else {
      console.log("There is more error")
    }
  }






  public totalItem : number = 0;
  public searchTerm: string ='';
  constructor(private http: HttpClient, private cartservice: CartService, private dialog: MatDialog, private registrationservice:RegistrationService, private productservice: ProductService, private userservice: UsersService) { 
    
    console.log("app called..")
    this.http.get<any[]>("http://localhost:8080/user").subscribe(
      x=>{this.demoVar =x;console.log(x)},
      err=>console.log("error")
    )
   
    
    

  }

  ngOnInit(): void {

    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;

    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);  
    
  }

  Login() {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:'50vw',
      height:'30vw'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

    Signup() {
      const dialogRef = this.dialog.open(SignupComponent,{
        width:'50vw',
        height:'30vw'


      })
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  loggedIn(){
    return localStorage.getItem('token');
  }
  onLogout(){
    localStorage.removeItem('token')
  }

  x=localStorage.getItem('token');
  update = localStorage.getItem('forupdate'); 
  walletmoney = localStorage.getItem('money')

  
  edit(id:any){
    console.log("xjg",id);

    var service = this.userservice.getUserById(id,this.http);

    service.subscribe(data=>{

      this.formProfile.controls["id"].setValue(data.id)
      this.formProfile.controls["name"].setValue(data.name);
      this.formProfile.controls["emailId"].setValue(data.emailId);
      this.formProfile.controls["password"].setValue(data.password);
      this.formProfile.controls["money"].setValue(data.money);

    })
    
  }


}
