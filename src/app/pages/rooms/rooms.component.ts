import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import getAllRooms  from '../../resources/getAllRooms.json';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  roomsArray:any[] =[];
  roomObject  ={
    "RoomId": 0,
    "RoomName": "string",
    "RoomLocation": "string",
    "RoomSeatingCapacity": 0,
    "IsRoomActive": true,
    "ClientId": 0,
    "CreatedDate": "2024-03-09T02:25:09.059Z",
    "LastUpdatetd": "2024-03-09T02:25:09.059Z"
  }
  constructor(private http: HttpClient){
    const userData = localStorage.getItem("loggedUserData");
    if(userData!=null){
      const userParseData = JSON.parse(userData)
      this.roomObject.ClientId = userParseData.clientId;
      this.getRoomByClientId();
    }
  }
  createRoom(){
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreateRoom", this.roomObject ).subscribe((res:any) =>{
      if(res.result){
        this.getRoomByClientId();
        alert("Room Created");
      }else{
        alert(res.Message)
      }
    })
    console.log("Done")
  }
  getRoomByClientId(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id="+this.roomObject.ClientId).subscribe((res:any) =>{
    //   this.roomsArray = res.data;
    // })
    this.roomsArray = getAllRooms.data;
  }
  updateRoom(){

  }
  getAllRooms(){

  }
}
