import { Component,  ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {NavItem} from '../app/Models/nav-item';
import {NavService} from '../app/app-Services/nav.services';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

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

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    console.log("after");
    this.navService.appDrawer = this.appDrawer;
  }
}