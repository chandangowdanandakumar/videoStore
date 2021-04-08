import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public homeService : HomeService) { }

  ngOnInit() {
    this.homeService.homeName().subscribe((resp:any)=>{
      console.log(resp)
    })

  }

}
