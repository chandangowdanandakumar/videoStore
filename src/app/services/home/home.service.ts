import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HomeService extends GlobalService{

  public homeName(){
    return this.httpClient.get(environment.baseurl + this.routes.moviename).pipe(map((resp: any) => resp))
  }
}
