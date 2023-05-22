import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr/toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {

  }

}
