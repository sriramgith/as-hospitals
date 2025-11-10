import { Component, DoCheck } from '@angular/core';
import { DataService } from '../dataservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {

  issignedin: any = sessionStorage.getItem('issignedin');
  constructor(public dataservice:DataService, public router:Router){
  }

  ngDoCheck(): void {
  this.issignedin = sessionStorage.getItem('issignedin');    
  }

  logout(){
    const usertype = sessionStorage.getItem("usertype");
    sessionStorage.clear();
    if(usertype == "doctor")
    {
      this.router.navigate(['/doctorlogin']);
    }
    else
    {
      this.router.navigate(['/clientlogin']);
   
    }
  }
}
