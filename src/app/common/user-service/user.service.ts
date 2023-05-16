import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data = new BehaviorSubject<any>(null);

  updateData(data) {
    this.data.next(data);
  }

  getData() {
    return this.data;
  }

}
