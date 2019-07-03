import { Component,  HostBinding, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import{NavItem} from '../Models/nav-item';
import{NavService} from '../app-Services/nav.services';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuComponent implements OnInit  {
    expanded: boolean;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input() item: NavItem;
    @Input() depth: number;
  
    constructor(public navService: NavService,
                public router: Router) {
      if (this.depth === undefined) {
        this.depth = 0;
      }
    }
  
    ngOnInit() {
        console.log("oninit");
      this.navService.currentUrl.subscribe((url: string) => {
        if (this.item.route && url) {
          // console.log(`Checking '/${this.item.route}' against '${url}'`);
          this.expanded = url.indexOf(`/${this.item.route}`) === 0;
          this.ariaExpanded = this.expanded;
          // console.log(`${this.item.route} is expanded: ${this.expanded}`);
        }
      });
    }
  
    onItemSelected(item: NavItem) {
        console.log("onitem");
      if (!item.children || !item.children.length) {
        this.router.navigate([item.route]);
      
      //this.navService.closeNav();
      }
      if (item.children && item.children.length) {
        this.expanded = !this.expanded;
      }
    }
  }
  