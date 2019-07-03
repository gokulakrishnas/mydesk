import { Component, OnInit,ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {NavService} from '../app-Services/nav.services';
import{user} from '../Models/user';
import { Observable, observable} from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Options } from 'selenium-webdriver/edge';
import { Router } from '@angular/router';

//import{HeaderComponent} from '../app-header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent   {
public response:any;
public Url:any;
public userslist:users ;
type:boolean;
  constructor(private httpClient: HttpClient,private router: Router) {
   
    this.Url="http://localhost:8040/api/Login?";
    this.userslist={
      UserName:"",
      PassWord:""
    };

  }


  Login(){
    let headers = new HttpHeaders();
    headers  = headers.append('Content-Type', 'application/json' );
    

   let params = new HttpParams();
   params = params.append('username', this.userslist.UserName);
   params = params.append('password', this.userslist.PassWord);

   this.httpClient.get(this.Url, { params }).subscribe(data=>{
    this.response=data.toString();
   console.log(this.response);
   if(data)
    {
      console.log("Login Success");
      //this.router.navigate(['HeaderComponent'])
     this.router.navigateByUrl('/app-header');
      
    }
    else
    {
      console.log("Login fail");
    }
   },error=> console.log(error)
    );
    
  }
}

export class users{
UserName:string;
PassWord:string;
}