import { Component, OnInit} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import doctors from '../../../public/JSON/doctors.json'

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [NgbModule, CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit{

  teamMembers = doctors;

  ngOnInit(): void {
  }

}
