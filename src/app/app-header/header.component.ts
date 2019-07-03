import { Component,  ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {NavItem} from '../Models/nav-item';
import {NavService} from '../app-Services/nav.services';
//import {NavItem} from '../app/Models/nav-item';
//import {NavService} from '../app/app-Services/nav.services';
import { MatSidenav } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent  implements AfterViewInit  {

  @ViewChild('appDrawer') appDrawer: MatSidenav;
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'Dashboard',
      
    },
    
    {
      displayName: 'Inbox',
      iconName: 'mail',
      children: [
        {
          displayName: 'MailBox',
          iconName: 'drafts',
          route: '/app-mailbox',
          
         
        },
        
        
      ]
    },
    
    {
      displayName: 'Admin',
      iconName: 'person',
      children: [
        {
          displayName: 'Usermanagement',
          iconName: 'group',
          route: '/app-toolbar',
           //
        },
        {
          displayName: 'Audiomanagement',
          iconName: 'speaker_notes',
          route: 'group',
          
        },
        {
          displayName: 'Environment',
          iconName: 'public',
          route: 'Environment'
        },
        {
          displayName: 'Notification Plan',
          iconName: 'notifications',
          route: 'Notification Plan'
        }
      ]
    },
    {
      displayName: 'Reporting',
      disabled: true,
      iconName: 'report',
      children: [
        {
          displayName: 'HistoricalReporting',
          iconName: 'group',
          route: 'HistoricalReporting'        
        },
        {
          displayName: 'RealTimeReporting',
          iconName: 'speaker_notes',
          route: 'RealTimeReporting'
          
        },
        
      ]
    },
    {
      displayName: 'Users',
      iconName: 'person_add',
      route: '/app-user'
    },
  ];
  toogleNav() {
    console.log("Dd")
    this.appDrawer.toggle();
   
      
    }
    
  
  open()
  {
    
  }
  
  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
   
  }
}