import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import loginAdmin  from '../../resources/loginAdmin.json';
import loginClientAdmin  from '../../resources/loginClientAdmin.json';
import loginClientUser  from '../../resources/loginClientUser.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { 

  }
  loginObject : any ={
    "userName" : "",
    "userPassword" : ""
  }
  onLogin(){
    //this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/login", this.loginObject).subscribe((res:any)=>{
      let res = loginAdmin;
      if(res.result){
        localStorage.setItem('loggedUserData', JSON.stringify(res.data));
        localStorage.setItem('loggedinUserName', res.data.userName);
        if(res.data.role == "admin")
          this.router.navigateByUrl("admin-dashboard");
        else if(res.data.role == "clientAdmin")
          this.router.navigateByUrl("client-dashboard");
        else if(res.data.role == "clientUser")
          this.router.navigateByUrl("user-dashboard");
      }
    //})
  }
  
}
