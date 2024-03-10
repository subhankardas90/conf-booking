import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import getAllUsers  from '../../resources/getAllUsers.json';
import getAllClients  from '../../resources/getAllClients.json';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  ngOnInit(): void {
    this.getAllClients();
  }
  userList : any[] = [];
  clients : any[] = [];
  loggeduserData : any;
  userObject = {
    "UserId": 0,
    "ClientId": 0,
    "UserName": "string",
    "UserPassword": "string",
    "CreatedDate": "2024-03-08T11:21:37.902Z",
    "LastUpdated": "2024-03-08T11:21:37.902Z",
    "IsActive": true,
    "Role": ""
  }
  constructor(private http: HttpClient){
    this.getAllUsers();
    const localData = localStorage.getItem("userLogin");
    if(localData != null){
      this.loggeduserData = JSON.parse(localData);
      if(this.loggeduserData.role =="Admin"){
        this.getAllUsers();
        this.getAllClients();
      }else{
        this.getAllUsersbyClientId();
        this.userObject.ClientId =this.loggeduserData.clientId;
      }
    }
  }
  getAllUsers(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllusers").subscribe((res:any)=>{
    //   this.userList = res.data;
    // })
    this.userList = getAllUsers.data;
  }
  getAllUsersbyClientId(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllusersByClientId?id="+this.loggedUserData.clientId).subscribe((res:any)=>{
    //   this.userList = res.data;
    // })
    this.userList = getAllUsers.data;
  }
  getAllClients(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients").subscribe((res:any)=>{
    //   this.userList = res.data;
    // })
    this.clients = getAllClients.data;
  }
  onSaveUser(){
    //  this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/AddUsers",this.userObj).subscribe((res:any)=>{
    //   if(res.result){
    //     if(this.loggeduserData.role =="Admin"){
    //       this.getAllUsers();
    //       this.getAllClients();
    //     }else{
    //       this.getAllUsersbyClientId();
    //       this.userObject.ClientId =this.loggeduserData.clientId;
    //     }
    //   }else{
    //     alert(res.Message)
    //   }
    //   this.userList = res.data;
    // })
    console.log("Saved")
    this.clients = getAllUsers.data;
  }
}
