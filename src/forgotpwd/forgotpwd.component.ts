import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../dataservice';
import { Route, Router } from '@angular/router';
import clients from '../../public/JSON/patientdetails.json'

@Component({
  selector: 'app-forgotpwd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css'
})
export class ForgotpwdComponent implements OnInit{

  constructor(public dataService:DataService, public router: Router){}

  newpwd:any = '';
  conpwd:any = '';
  phone:any;
  showpass: boolean = false;
  passtype : any = 'password'
  showconfpass: boolean = false;
  confpasstype : any = 'password';
  invaluser: boolean = false;
  patientslist : any= [];

  ngOnInit(): void {
    this.patientslist = clients;
  }

  submitpwd(){
    var userloggedin = ""
    for(let i=0; i<this.patientslist.length; i++){
      if(this.patientslist[i].phone == this.phone){
        this.dataService.logindetails.password = this.newpwd;
        this.dataService.logindetails.username = this.phone;
        userloggedin = "valid";
        this.router.navigate(['/clientlogin']);
        return;
      }
    }
    if(userloggedin == ""){
      this.invaluser = true;
      alert('Invalid Phone Number!!! Please enter your Registered Number Correctly');        
    }
  }

  showpassword(){
    if(this.passtype == 'password'){
      this.passtype = 'text';
    }
    else{
      this.passtype = 'password';
    }

    this.showpass = !this.showpass;
  }

  showconfirmpassword(){
    if(this.confpasstype == 'password'){
      this.confpasstype = 'text';
    }
    else{
      this.confpasstype = 'password';
    }

    this.showconfpass = !this.showconfpass;
  }
}


