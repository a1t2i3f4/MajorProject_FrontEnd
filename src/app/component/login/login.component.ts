import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
   msg='';

  constructor(private service: RegistrationService, private route: Router,private dialog:MatDialog){}

  ngOnInit(): void {
    
  }
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  hide = true;

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
      
        console.log("response received");
        // console.log(localStorage.setItem('token',  ))
        // console.log(this.user);
        
        localStorage.setItem('token', JSON.stringify(data.emailId));
        this.dialog.closeAll();
        // console.log(localStorage.getItem("token"));
        
        this.route.navigate(['/login'])
    },
      error=> {
        console.log("exception occured");
        this.msg="Bad credentials, please enter valid email Id and password";
      }
      
      
    )

  }
  

}
