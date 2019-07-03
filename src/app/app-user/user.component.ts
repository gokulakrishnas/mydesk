import { Component, OnInit,ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSidenav } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {NavService} from '../app-Services/nav.services';
import{user} from '../Models/user';

import { Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class userComponent   {
  public input: any;
  hide = true;
  isCardExpanded = false;
  dataSource: MatTableDataSource<any>;
  httpdata;
  //displayedColumns = ['CompanyName', 'CreatedBy', 'CreatedDate','EmailAddress','FirstName','FullName','LastName',
  //'MobileNumber','PassWord','Type','UserName'];
  displayedColumns = ['UserName','PassWord','FullName','Type','CompanyName'];
constructor(public http: Http,private httpClient: HttpClient)
{
 
 
    this.isCardExpanded = !this.isCardExpanded;
  
  
}
ngOnInit(): void {
  this.http.get('http://localhost:8040/api/Login').subscribe(result => {
    this.input = result.json() as user[];
    console.log(this.input);
    this.dataSource = new MatTableDataSource(this.input);
    console.log(this.dataSource);
    error => console.log(error);
  })
}
  

}
