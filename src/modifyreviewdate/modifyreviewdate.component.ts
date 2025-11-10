import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../dataservice';
import patientdetails from '../../public/JSON/patientdetails.json';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modifyreviewdate',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modifyreviewdate.component.html',
  styleUrl: './modifyreviewdate.component.css'
})
export class ModifyreviewdateComponent implements OnInit {

  @Output() datemodified =  new EventEmitter<boolean>();
  nextrvwdate:any;
  newDate: any;
  emailsub: string = "Requesting for new review date reg.";
  emailto: string = "as@gmail.com";
  emailbody: any;
  modifyForm: any;

  constructor(public dataservice: DataService, public activemodal: NgbActiveModal){

  }
  ngOnInit(): void {
    this.nextrvwdate = patientdetails[0].nextReview;
   }

  raisereq(){
    this.datemodified.emit(true);
    const date = this.newDate.split('-');
    const finaldate = date[2]+'-'+date[1]+'-'+date[0]
    this.emailbody = `Hi Team, %0D%0D
    I'm ${this.dataservice.logindetails.username}, I hereby wanted to change my review date from ${this.nextrvwdate} to ${finaldate}.
    %0D%0DThanks & Regards,
    %0D%0D${this.dataservice.logindetails.username}`; 
    const mailtolink = `mailto:${this.emailto}?subject=${this.emailsub}&body=${this.emailbody}`;
    window.location.href= mailtolink;
    this.activemodal.close();
  }

  closereq(){
    this.activemodal.close();
  }
}
