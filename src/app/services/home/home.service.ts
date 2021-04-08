import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends GlobalService{

  public homeName(){
    return this.httpClient.get('https://run.mocky.io/v3/7dd2f77a-66ef-4cae-b351-18a18a8f0cc5').pipe(map((resp: any) => resp))
  }
}
