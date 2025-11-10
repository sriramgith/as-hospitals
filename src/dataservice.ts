import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class DataService
{
    usertype:any;
    newUser: boolean = false;
    logindetails = {
      username: "",
      password : ""
    }

}