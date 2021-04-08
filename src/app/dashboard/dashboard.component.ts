import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
response:any;
genres:any = [];
  constructor(public homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.homeName().subscribe((resp:any)=>{
      this.response = resp;
      console.log(resp)
      this.response.forEach((element:any) => {
        let x = element.moviegenres.split('|');
        x.forEach((element:any) => {
          if(!this.genres.includes(element)){
            this.genres.push(element);
          }
        });
      });
      console.log(this.genres)
    })
    
  }

}
