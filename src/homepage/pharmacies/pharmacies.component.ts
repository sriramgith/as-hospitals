import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Pharmacy from '../../../public/JSON/Pharmacy.json';

@Component({
  selector: 'app-pharmacies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.css'
})
export class PharmaciesComponent implements OnInit{
  pharmacyList = Pharmacy;
  currentIndex = 0;
  isDisableLeft: Boolean = true;
  isDisableRight: Boolean = false;
  totalSlides: number = 0;
  visibleSlides: number = 4;
  changedIndex : number = 0;

  ngOnInit(): void {
    console.log("Pharmacies - ", this.pharmacyList);
    this.totalSlides = this.pharmacyList.length;
  }
  
  previous() {
    this.isDisableRight = false;
    this.currentIndex -= 1;
    if(this.currentIndex == 0) {
      this.isDisableLeft = true;
    }
    this.changedIndex++;
  }

  next() {
    this.isDisableLeft = false;
    this.currentIndex += 1;
    if(this.currentIndex == this.totalSlides-this.visibleSlides) {
      this.isDisableRight = true;
    }
    this.changedIndex--;
  }

  get transform() {
    const val = this.changedIndex * 32.5;
    return `translateX(${val}vw)`;
  }
}
