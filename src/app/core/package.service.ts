import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import getAllPackages  from '../resources/getAllPackages.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  getAllPackages(){
    return this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages");
  }

  addNewPackage(obj:any){
    return this.http.post("https://onlinetestapi.gerasim.in/api/Meeting/createPackage", obj);
  }
  getPackageById(packageId:number){
    return this.http.get("https://onlinetestapi.gerasim.in/api/Meeting/GetPackageById?id="+ packageId);
  }
  updatePackage(obj:any){
    return this.http.post("https://onlinetestapi.gerasim.in/api/Meeting/UpdatePackage", obj);
  }
  deletePackageById(packageId:any){
    return this.http.post("https://onlinetestapi.gerasim.in/api/Meeting/DeletePackageById?id=", packageId);
  }
}
