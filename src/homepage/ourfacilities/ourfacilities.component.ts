import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import fac from '../../../public/JSON/Facilities.json'

@Component({
  selector: 'app-ourfacilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourfacilities.component.html',
  styleUrl: './ourfacilities.component.css'
})
export class OurfacilitiesComponent implements OnInit{

  currentslideindex: number = 0;
  visibleslides:number = 0;
  totalslides:number = 0;
  prevdisabled:boolean = true;
  nextdisabled:boolean = false;
  filteredslides:any = [];

  slides: any = fac;

  ngOnInit(): void {
    this.totalslides = this.slides.length;
    this.visibleslides = 4;
  }

  get visibleFacilities() {
    var start = this.currentslideindex;
    var end = start + this.visibleslides;
    this.filteredslides = this.slides.slice(start,end);
    return this.filteredslides;
  }

  onslidechange(action:any){
    if(action == "next"){
      this.currentslideindex++;
    }
    else if(action=="prev"){
      this.currentslideindex--;
    }
    if(this.currentslideindex == 0){
      this.prevdisabled = true;
      this.nextdisabled = false;
    }
    else if(this.currentslideindex == (this.totalslides - this.visibleslides)){
      this.nextdisabled = true;
      this.prevdisabled = false;
    }
    else{
      this.prevdisabled = false;
      this.nextdisabled = false;
    }
  }


}
