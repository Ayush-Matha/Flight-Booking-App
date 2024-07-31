import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged:boolean = false;


  constructor(private router:Router) { }

  login(usrName:string,pass:string)
  {
    let user = (usrName === 'AyushMatha' && pass === '12345') ? { uname:'AyushMatha',contact:7447710296,id:'abc1'}:undefined;
    if(user === undefined)
    {
      alert("Login Failed...");
    }
    else
    {
      this.isLogged = true;
      alert("Login Successful...");
      this.router.navigate(['/layout']);
    }

  }

  logout()
  {
    this.isLogged = false;
    this.router.navigate(['/login']);
    alert("Logout Done");
  }

  isAuthenticated()
  {
    return this.isLogged;
  }

}
