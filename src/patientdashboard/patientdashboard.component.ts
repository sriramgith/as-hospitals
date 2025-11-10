import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice';
import patientdetails from '../../public/JSON/patientdetails.json'
import { DatePipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModifyreviewdateComponent } from '../modifyreviewdate/modifyreviewdate.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patientdashboard',
  standalone: true,
  imports: [DatePipe, CommonModule, FormsModule, ReactiveFormsModule, ModifyreviewdateComponent],
  templateUrl: './patientdashboard.component.html',
  styleUrl: './patientdashboard.component.css'
})

export class PatientdashboardComponent implements OnInit {

  patient : any;
  today: any;
  iscompleted: boolean = false;
  taskcomment: any = [];
  maximlength: number = 1000;
  issubmitted: boolean = false;
  clientform!: FormGroup;
  isformeditted: boolean = false;
  nextrvwdate: any;
  toastermsg: boolean = false;
  showloader: boolean = false;
  showtaskloader: boolean = false;
  user: any;
  moodStates: any = [
    {
      "mood": "Good"
    },
    {
      "mood": "Average"
    },
    {
      "mood" : "Bad"
    }
];
  moodToday: any;

  constructor(public dataService:DataService, public formBuilder: FormBuilder, public modalservice: NgbModal, public config: NgbModalConfig){ 
  }
  ngOnInit(): void {
    this.moodToday = "Good";
    this.patient = patientdetails[0];
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear() % 100;
    this.today = day+"-"+month+"-"+year;
    if(patientdetails[0].todaytask.length > 0){
      this.issubmitted = true;
    }
    else{
      this.issubmitted = false;
    }
    this.user = sessionStorage.getItem("username");
  }

  iseditform(){
    this.isformeditted = true;
    this.clientform = this.formBuilder.group({
      name: new FormControl(this.patient.name, Validators.required),
      phone: new FormControl(this.patient.phone, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      age: new FormControl(this.patient.age, [Validators.required, Validators.pattern('^[0-9]{2,3}$')]),
      email: new FormControl(this.patient.email, [Validators.required, Validators.email])
    });
    document.body.classList.add('modal-open');
  }

  moodtod(moodstate: any){
    this.moodToday = moodstate.mood;
  }

  savetask(){
    console.log("Date- "+ this.today);
    console.log("Task- "+this.taskcomment);
    console.log("Mood- "+this.moodToday);
    this.showtaskloader = true;
    setTimeout(() => {
      this.showtaskloader = false;   
      this.issubmitted = true;
      this.moodToday = "Good";
    }, 3000);
  }

  savedetails(){
    const clientdetail = this.clientform.value;
    console.log('Details', clientdetail);
    this.clientform.reset();
    this.isformeditted = false;
    document.body.classList.remove('modal-open');
    this.toastermsg = true;
    setTimeout(()=>{
      this.toastermsg = false;
    },3000)
  }

  cancelclientdetail(){
    this.clientform.reset();
    this.isformeditted = false;
    document.body.classList.remove('modal-open');
  }

  modifydate(){
    console.log('date- '+this.patient.nextReview);
    this.nextrvwdate = this.patient.nextReview;
    this.modalservice.open(ModifyreviewdateComponent, {
      size: 'sm',
      centered: true
    })
   
  }

  closetoaster(){
    this.toastermsg = false;
  }
}
