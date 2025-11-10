import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NgbModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  reachOut: any = [
    {'type': 'Address', 
      'detail1' : 'AS Hospitals, No 3, JK Street,', 
      'detail2' : 'AS Nagar, Chennai',
      'detail3' : '', 
      'detail4' : ''
    },
    {'type':'Phone',
    'detail1' : 'Phone-1: 044-272993', 
    'detail2' : 'Phone-2: 044-272992',
    'detail3' : '', 
    'detail4' : ''
    },
    {'type':'Email',
    'detail1' : 'Email-1: ashospitals@gmail.com', 
    'detail2' : 'Email-2: ashospitaladmin@gmail.com',
    'detail3' : '', 
    'detail4' : ''
    }

  ]

}
