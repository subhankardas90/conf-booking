import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../core/package.service';
import getAllPackages  from '../../resources/getAllPackages.json';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent implements OnInit {
  
  packagesArray : any[] =[];
  packageObj = {
    "packageId":0, 
    "packageName":"", 
    "packageCost":"", 
    "packageDescription":"", 
    "isPackageActive":false, 
    
  }
  constructor(private packageService: PackageService){

  }
  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(){
    // this.packageService.getAllPackages().subscribe((res:any)=> {
    //   this.packagesArray = res.data;
    // })
    this.packagesArray = getAllPackages.data;
  }
  createPackage(){
    // this.packageService.addNewPackage(this.packageObj).subscribe((res:any)=> {
    //   if(res.Result){
    //     this.loadPackages();
    //     alert("Package added");
    //   }else{
    //     alert(res.Message);
    //   }
    // })
    console.log("test")
    this.loadPackages();
  }
  updatePackage(){
    // this.packageService.updatePackage(this.packageObj).subscribe((res:any)=> {
    //   if(res.Result){
    //     this.loadPackages();
    //     alert("Package added");
    //   }else{
    //     alert(res.Message);
    //   }
    // })
    console.log("updated")
    this.loadPackages();
  }

  editPackage(id:number){
    // this.packageService.getPackageById(id).subscribe((res:any)=> {
    //   if(res.Result){
    //     this.packageObj = res.data;
    //     alert("Package Updated");
    //   }else{
    //     alert(res.Message);
    //   }
    // })
    this.packageObj = this.packagesArray[0];
    console.log("edited")
    this.loadPackages();
  }
  deletePackage(id:number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      // this.packageService.deletePackageById(id).subscribe((res:any)=> {
      //   if(res.Result){
      //     this.loadPackages();
      //     alert("Package Deleted");
      //   }else{
      //     alert(res.Message);
      //   }
      // })
      
      console.log("deleetd")
      this.loadPackages();
    }
  }
}
