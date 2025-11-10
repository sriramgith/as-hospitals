import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { OurfacilitiesComponent } from '../ourfacilities/ourfacilities.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { PharmaciesComponent } from '../pharmacies/pharmacies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent, ContactusComponent, DoctorsComponent, OurfacilitiesComponent, FaqsComponent, PharmaciesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
