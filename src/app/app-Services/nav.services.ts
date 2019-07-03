import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { MatSidenav } from '@angular/material';
@Injectable()
export class NavService {
  public appDrawer: MatSidenav;
  public currentUrl = new BehaviorSubject<string>(undefined);
   
   public sidenav: any;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }
  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    console.log("d")
    this.appDrawer.toggle();
  }
 
 
  
  toogleNav(nav: any) {
    console.log("sevice");
    
    if (nav.opened) {
      
      console.log("ok");
      nav.close();
    } 
    else {
      
      nav.open();
    }
  }
}
