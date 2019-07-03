import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import{MatInputModule, MatIconModule,MatToolbarModule,MatSliderModule,MatSlideToggleModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule,MatListModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { Routes, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Http, HttpModule } from "@angular/http";

import{HeaderComponent} from '../app/app-header/header.component';
import{MenuComponent} from '../app/app-menu/menu.component';
import{NavService} from'../app/app-Services/nav.services';
import{toolbarComponent} from '../app/app-tool/toolbar.component';
import{Mailboxcomponent} from '../app/app-mailbox/mailbox.component';
import{userComponent} from '../app/app-user/user.component';
import{LoginComponent} from '../app/app-login/login.component';
//perfect scroll bar
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const approutes: Routes = [
  {
    path: '', redirectTo: '/app-login', pathMatch: 'full'
  },

  {
    path: 'app-header',component: HeaderComponent,
  },
  {
    path: 'app-toolbar', component: toolbarComponent
  },
  {
    path: 'app-root', component: AppComponent
  },
  {
    path: 'app-mailbox', component: Mailboxcomponent
  },
  {
    path: 'app-user', component: userComponent
  },
  {
    path: 'app-login', component: LoginComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    toolbarComponent,
    Mailboxcomponent,
    userComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTreeModule,
    PerfectScrollbarModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpModule,
    //RouterModule.forChild(approutes),
    RouterModule.forRoot(approutes, { useHash: true })
    
  ],
  exports:[
    FlexLayoutModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
     MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    PerfectScrollbarModule
    
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },NavService],

    
  
  bootstrap: [AppComponent]
})
export class AppModule { }
