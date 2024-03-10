import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import getTimeList  from '../../resources/getTimeList.json';
import getAllRooms  from '../../resources/getAllRooms.json';
import getBookingData  from '../../resources/getBookingData.json';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit, OnChanges{

  timeArray: any[] = [];
  userDetails : any;
  roomsArray: any[] =[];
  bookingArray: any[] =[];
  pickDate : any = new Date().toLocaleDateString('en-CA');
  bookingObj = {
    "BookingId": 0,
    "RoomId": 0,
    "UserId": 0,
    "BookingDate": "2024-03-10T02:14:41.141Z",
    "FromTime": "",
    "ToTime": "",
    "CreatedDate": "2024-03-10T02:14:41.141Z",
    "LastUpdated": "2024-03-10T02:14:41.141Z"
  }
  constructor(private http:HttpClient){
    const localData = localStorage.getItem("userLogin");
    if(localData != null){
      this.userDetails = JSON.parse(localData);
      this.getRoomsList();
      this.bookingObj.UserId = this.userDetails.userId;
    }
  }
  ngOnInit(): void {
    this.getTimeList();
    this.getRoomsList();
    console.log(this.pickDate);
    this.getBookingByDate("2024-03-10");
  }
  ngOnChanges(): void {
    console.log("pick", this.pickDate)
  }
  public onDate(event:any): void {
    console.log("pick", this.pickDate)
    this.getBookingByDate(this.pickDate);
  }
  getTimeList(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetTimeList").subscribe((res:any)=>{
    //   this.timeArray = res.data;
    // })
    this.timeArray = getTimeList.data;

  }
  getRoomsList(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetTimeList").subscribe((res:any)=>{
    //   this.timeArray = res.data;
    // })
    this.roomsArray = getAllRooms.data;

  }
  getAllBooking(){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByClientId").subscribe((res:any)=>{
    //   this.bookingArray = res.data;
    // })
    this.bookingArray = getBookingData.data;

  }
  getBookingByDate(date: any){
    // this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByClientId").subscribe((res:any)=>{
    //   this.bookingArray = res.data;
    // })
    console.log("date", date);
    this.bookingArray = getBookingData.data.filter(m=> m.BookingDate==date);

  }
  checkForRoomBooked(roomId:number, timeId:number){
    const bookingData = this.bookingArray.find(m=>m.RoomId==roomId && (m.fromTime ==timeId || m.toTime==timeId));
    if(bookingData){
      return true;
    }else{
      return false;
    }

  }
  saveBooking(){
    // this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreateBooking", this.bookingObj).subscribe((res:any)=>{
    //   if(res.result){
    //     alert("Booking DOne");
    //   }else{
    //     alert(res.message)
    //   }
    // })
    alert("Saved");
  }
  openBooking(){
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "block";
    }
  }
  closeBooking(){
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "none";
    }
  }
  
}
