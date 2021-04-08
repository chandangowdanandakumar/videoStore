import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
response:any;
  constructor(public homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.homeName().subscribe((resp:any)=>{
      this.response = resp;
    })
  }

}
