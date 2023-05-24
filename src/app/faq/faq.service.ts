import { Injectable } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FaqService {

constructor(private http: HttpClient, private apiConfigService: ApiConfigService) { }

getFAQ=()=>{
    // return fetch('../../assets/faq.json').then(data=> data.json());
    return this.http.get(this.apiConfigService.getFAQ)
  }
}
