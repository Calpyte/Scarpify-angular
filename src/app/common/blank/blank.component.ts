import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, catchError, filter, first, map, take, takeLast, takeUntil, throwError } from 'rxjs';
import { from, last } from 'rxjs';


@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor() { }

  private $subscription: Subscription;


  sampleArrays = [
    'data1', 'data2'
  ]

  ngOnInit() {

    let observable = new Observable((observer) => {
      this.sampleArrays.forEach((e) => {
        observer.next(e);
        // observer.error("this is from error");
      });
      observer.complete();
    })


    this.$subscription = observable.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    })
    this.$subscription.unsubscribe();

  }



}
