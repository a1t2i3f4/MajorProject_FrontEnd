import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private service : RegistrationService, private route: Router, private dialog:MatDialog){}

  ngOnInit(): void {
    
  }
 

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);
  money = new FormControl('',[Validators.required, Validators.email] );

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  hide = true;

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        console.log(this.user);
        
        this.msg="Registration successful";
        this.dialog.closeAll();
        this.route.navigate(['/login'])
      },
      error => {
      console.log("exception occured");
       this.msg=error.error;
      
      }
    )

  }
}
