import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RegistrationService } from 'src/app/service/registration.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm: string ='';
  constructor(private cartservice: CartService, private dialog: MatDialog, private registrationservice:RegistrationService, private productservice: ProductService) { }

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
  // getToken(){
  //   return localStorage.getItem('token')
  // }


}
