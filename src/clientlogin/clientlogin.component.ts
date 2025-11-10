import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';
import clientlist from '../../public/JSON/patientdetails.json'


@Component({
  selector: 'app-clientlogin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clientlogin.component.html',
  styleUrl: './clientlogin.component.css'
})
export class ClientloginComponent implements OnInit {

  patients: any = [];
  uname:any;
  pwd:any;
  passwordFieldType: string = "password";
  captch: any;
  gencaptcha: any = [];
  caplentgh: number = 6;
  capmismatch: boolean  = false;
  invaluser : boolean = false;
  invalpassword: boolean = false; 
  constructor(public router:Router, public dataService:DataService){

  }

  ngOnInit(): void {
    this.generatenewcapctha();
    this.patients = clientlist;
  }

  generatenewcapctha(){
    this.gencaptcha='';
    this.captch = '';
    const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890"
    for(let i = 0; i<this.caplentgh; i++){
      const capchars = Math.floor((Math.random() * cap.length));
      const char = cap[capchars];
      this.gencaptcha += char; 
    }
  }

  forgpwd(){
    this.router.navigate(['/forgotpwd'])
  }

  capcheck(){
    if(this.gencaptcha == this.captch){
      this.capmismatch = false;
    }
    else{
      this.capmismatch = true;
    }
  }

  togglePasswordVisibility(){
    if(this.passwordFieldType == "password"){
      this.passwordFieldType = "text";
    }
    else{
      this.passwordFieldType = "password"
    }
  }
  clientlogin(){
    this.dataService.logindetails.username = "";
    this.dataService.logindetails.password = "";
    for(let i=0; i<this.patients.length; i++){
      if(this.patients[i].phone == this.uname)
      {
        this.dataService.logindetails.username = this.patients[i].name;
        if(this.patients[i].password == this.pwd)
        {
          this.dataService.logindetails.password = this.pwd;
          this.invaluser = false;
          this.invalpassword = false;
          sessionStorage.setItem("username", this.patients[i].name);
          sessionStorage.setItem("password", this.pwd);
          sessionStorage.setItem("usertype", "client");   
          sessionStorage.setItem("issignedin", "true");          
          this.router.navigate(['/client']);
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
}
