import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';
import doctors from '../../public/JSON/doctors.json'

@Component({
  selector: 'app-doctorlogin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent implements OnInit {
  uname:any;
  pwd:any;
  doc: any = [];
  passwordFieldType: string = "password";
  invalpassword: boolean = false;
  invaluser: boolean = false;
 
  constructor(public router:Router, public dataService:DataService){

  }

  ngOnInit(): void {
    this.doc = doctors;
  }

  togglePasswordVisibility(){
    if(this.passwordFieldType == "password"){
      this.passwordFieldType = "text";
    }
    else{
      this.passwordFieldType = "password"
    }
  }

  doclogin(){
    this.dataService.logindetails.username = "";
    this.dataService.logindetails.password = "";
    for(let i=0; i<this.doc.length; i++){
      if(this.doc[i].phone == this.uname)
      {
        this.dataService.logindetails.username = this.doc[i].name;
        if(this.doc[i].password == this.pwd)
        {
          this.dataService.logindetails.password = this.pwd;
          this.invaluser = false;
          this.invalpassword = false;
          sessionStorage.setItem("username", this.doc[i].name);
          sessionStorage.setItem("password", this.pwd);
          sessionStorage.setItem("usertype", "doctor");          
          sessionStorage.setItem("issignedin", "true" );          
          this.router.navigate(['/doctor']);
          return;          
        }
      }
    }
    if(this.dataService.logindetails.username == ""){
      this.invaluser = true;
    }
    else if(this.dataService.logindetails.password == ""){
      this.invalpassword = true;
    }
  }
  
  forgpwd(){
    this.router.navigate(['/forgotpwd'])
  }
}
