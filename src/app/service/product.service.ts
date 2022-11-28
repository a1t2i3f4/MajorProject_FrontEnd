import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Values } from '../Product';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

//  class Values {
//   productId?: any;
//   productName?: any;
//   productCategory?: any;
//   productRate?: any;
//   description?: any;
//   rating?:any;
//   imageurl?:any;
// }

export class ProductService {

  // URL="http://localhost:8080/update";
  // URL1="http://localhost:8080/product";

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<Values[]>("http://localhost:8080/product")
    .pipe(map((res:any)=>{
      return res;
    }))     
  }

  saveUser(data:Values,http:HttpClient){
    http.post<Values[]>("http://localhost:8080/create", data)
              .subscribe(x=>console.log(x),err=>console.log(err))
  }

  deleteUser(id:any,http:HttpClient){
    http.delete("http://localhost:8080/delete/"+id,{})
              .subscribe(x=>console.log(x),err=>console.log(err))
  }


  getUserById(id:any,http:HttpClient):Observable<any>{ 
     return  http.get<any>("http://localhost:8080/product/"+id,{})
    }

    updateUserById(obj:Values, http:HttpClient){
     return http.put<Values[]>("http://localhost:8080/update/"+obj.productId,obj)}
}
