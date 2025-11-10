import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import faq from '../../../public/JSON/faq.json';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, NgbCollapse, NgbAccordionModule ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

  questions: any = faq;

  toggleitem(item:any){
    item.isCollapsed = !item.isCollapsed;
  }

}
