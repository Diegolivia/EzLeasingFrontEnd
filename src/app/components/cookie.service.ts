import { Injectable } from '@angular/core';
interface Cookies {
  name: String;
  value: String;
  daysleft:Number;
}

@Injectable()
export class CookieService {
  arrcookies: Cookies[] = [];

  getCookie(name: string) {
    this.arrcookies.forEach((element) => {
      console.log(element);
    });
  return this.arrcookies[0]
  }

  deleteCookie(cookieName: string) {
    this.setCookie(cookieName,"");
  }

  setCookie(name:string,value:string){
    console.log(this.arrcookies)
  }

  saveCookie(params: any) {
    let d: Date = new Date();
    d.setTime(
      d.getTime() +
        (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000
    );

  }
}
