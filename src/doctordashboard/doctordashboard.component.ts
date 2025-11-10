import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DataService } from '../dataservice';
import patientdetails from '../../public/JSON/patientdetails.json';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalConfig, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctordashboard',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './doctordashboard.component.html',
  styleUrl: './doctordashboard.component.css'
})
export class DoctordashboardComponent implements OnInit{

  allpatients : any = patientdetails;
  emailsubject : any;
  emailbody: any; 
  task: any;
  patname: any;
  user:any;
  @ViewChild('progress', { static: true }) progress!: TemplateRef<any>;

  constructor(public dataService:DataService, public modalservice:NgbModal, public config: NgbModalConfig){
  }

  ngOnInit(): void {
    this.emailsubject = "Reminder to complete today's task and update progress note";
    for(let i =0; i<this.allpatients.length; i++){
      this.allpatients[i].istooltipvisible = false;
    }
    this.user = sessionStorage.getItem('username');
    console.log(this.allpatients);
  }

  senderminder(patient: any){
    this.emailbody = `Hello ${patient.name}, %0D%0D
    This email is to remind you to complete the given task and update in your daily progress note in the portal. %0D%0D
    For queries reach out to as@gmail.com
    %0D%0DThanks & Regards,
    %0D%0D${patient.docname}`;
    const mailto = `mailto:${patient.emailid}?subject=${this.emailsubject}&body=${this.emailbody}`;
    window.location.href = mailto;
  }

  viewprogress(patient:any){
    this.task = patient.todaytask;
    this.patname= patient.name;
    this.modalservice.open(this.progress ,{
      size: 'lg',
      centered: true,
    })
  }

  closepop(){
    this.modalservice.dismissAll();
  }

  showtooltip(patient:any){
    patient.istooltipvisible=true;
  }
  
  hidetooltip(patient:any){
    patient.istooltipvisible=false;
  }
}
