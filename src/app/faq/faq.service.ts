import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

constructor() { }
  getFAQ=()=>{
    return fetch('../../assets/faq.json').then(data=> data.json());
  }
}
