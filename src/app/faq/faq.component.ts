import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private faqService :FaqService) { }

  faqs:any = [];

  ngOnInit() {
    this.faqService.getFAQ().subscribe((data: any) => {
      this.faqs = data?.faq;
    });
  }

}
