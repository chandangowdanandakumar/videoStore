import { Injectable } from "@angular/core";
import construct = Reflect.construct;
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})export class GlobalService {
  routes = {
    moviename: "moviename"
  }

  constructor(protected httpClient: HttpClient) {}
  
  protected toFormData(formObj: any, formData: FormData) {
    Object.keys(formObj).forEach((n) => {
      const obj = formObj[n];
      if (obj instanceof Array) {
        obj.forEach((o) => {
          const fileObj: any = {};
          fileObj[n] = o;
          this.toFormData(fileObj, formData);
        });
      } else if (obj instanceof File) {
        formData.append(n, obj, obj.name);
      } else {
        formData.append(n, obj);
      }
    });

    return formData;
  }
}
