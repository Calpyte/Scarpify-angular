import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsApiService {

  constructor(private http: HttpClient) { }

  getArray(url: any):Observable<any[]> {
    return this.http.get<any[]>(url);
  }
}
