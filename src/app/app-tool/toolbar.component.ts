import { Component, OnInit,ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {NavService} from '../app-Services/nav.services';
import { ViewChild } from '@angular/core';
import {NavItem} from '../Models/nav-item';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class toolbarComponent   {

}