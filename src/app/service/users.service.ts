import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class Values {
  id?: any;
  name?: any;
  emailId?: any;
  password?: any;
  money?:any;
}
export class UsersService {
  mydata: any;

  constructor() { }


  // console.log("app called..")
  // this.http.get<any[]>("http://localhost:8080/user").subscribe(
  //   x=>{this.demoVar =x;console.log(x)},
  //   err=>console.log("error")
  // )
  
  getUserById(id:any,http:HttpClient):Observable<any>{
    return  http.get<Values>("http://localhost:8080/user/"+id,{})
   }

   updateUserById(data:Values,http:HttpClient){
     http.put<Values[]>("http://localhost:8080/updateuser/"+data.id,data).subscribe(x=>console.log(x),err=>{console.log(err)})
   }
     
   }

