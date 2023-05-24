import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReferralService } from '../referral.service';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.component.html',
  styleUrls: ['./ContactUs.component.css']
})
export class ContactUsComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();

  contactForm: FormGroup;
  step: number = 0;
  isSubmit: boolean;
  id: string;
  title: string;
  data :any;

  @Input() events: Observable<void>;
  @Output() saveEvent = new EventEmitter();
  constructor(private referralService:ReferralService,private fb: FormBuilder) { }

  ngOnInit() : void {
    this.title = this.data?.title;
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      email: ['',[Validators.email]]
    });
    // if (this.data.id) {
    //   this.referralService.getBuyerById(this.data?.id).subscribe((data: any) => {
    //     this.id = data?.id;
    //     this.ContactUsForm = this.formBuilder.group({
    //       name: [data?.name],
    //       mobile: [data?.mobile],
    //       email: [data?.email]
    //     });
    //   })
    // }
    this.isSubmit = false;
  }
  submitForm = () => {
    console.log(this.contactForm?.value)
    this.isSubmit = true;
    this.saveEvent.emit(true);
    let ContactUsData = this.contactForm?.value;
    if (this.id) {
      ContactUsData.id = this.id;
    }
    this.sendForm(ContactUsData);
  };
  sendForm = (data) => {
    if (!this.contactForm.invalid) {
      this.referralService.addContactUs(data).subscribe((data: any) => {


               });
    }
  };
}
