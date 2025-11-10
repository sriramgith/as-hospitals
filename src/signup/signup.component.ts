import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators, ReactiveFormsModule, ValidationErrors, PatternValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signUp!: FormGroup;
  passmismatch : boolean = false;
  passtype: boolean = false;
  confpasstype: boolean = false;
  maxChars : number = 5000;
  reasonInput: any;

  constructor(public formbuilder:FormBuilder, public router: Router, public dataService: DataService){

  }
  ngOnInit(): void {
    this.signUp = this.formbuilder.group(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]),
        gender: new FormControl('Male', Validators.required),
        countryCode : new FormControl('+91', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
        email : new FormControl('', [Validators.email, Validators.required, this.emailrestriction]),
        password : new FormControl('', [this.patternValidator]),
        confirmPassword : new FormControl('', Validators.required),
        presentingIllness: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]),
        historyOfPresentingIllness: new FormControl('')
        },
      {
        validator: this.passwordMatchValidator
      },);
    }
    
    submit(){
      if(this.signUp.valid){
        const userdata = this.signUp.value;
        delete userdata.confirmPassword;
        console.log("Form Data to be sent:", userdata);
        this.dataService.logindetails.username = this.signUp.controls['phone'].value;
        this.dataService.newUser = true;
        this.signUp.reset();
        this.router.navigate(['/client']);        
      }
      else{
        this.signUp.markAllAsTouched();
      }
     
    }

    togglepass(){
      this.passtype = !this.passtype;
    }

    toggleconfpass(){
      this.confpasstype = !this.confpasstype;
    }

      passwordMatchValidator(control : AbstractControl) : ValidationErrors | null{
        const pass = control.get('password')?.value;
        const confpass = control.get('confirmPassword')?.value;
    
        if(pass != confpass){
          return { 'mismatch': true };
        }
        else{
          return null;
        }
    }
    
      emailrestriction(control : AbstractControl) : ValidationErrors | null{
        var emailid = control.value as string;
    
        if(emailid?.includes('@test')){
          return { 'invalidemail': true };
        }
        else{
          return null;
        }
    }
    
    patternValidator(control:AbstractControl) :  ValidationErrors | null {
      var passw = control.value;
    
      if(passw == ''){
        return {'req' : true};
      }
    
      else if(!/(?=.*[A-Z])/.test(passw)){
        return {'nocaps' : true};
      }
      else if(!/(?=.*[0-9])/.test(passw)){
        return{'nonum' : true};
      }
      else if(!/(?=.*[!@#$%^&*()_+])/.test(passw)){
        return {'nospl' : true};
      }
      else if(passw?.length < 8){
        return {'minlen' : true};
      }
      else{
        return null;
      }
    }
  }

