import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AppRoutingModule } from './app-routing.module-2';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { OAuthService, AuthConfig, OAuthLogger ,UrlHelperService} from 'angular-oauth2-oidc';
import { IdentityServer4AuthService} from './services/auth2.service';
import { OAuthModule } from 'angular-oauth2-oidc';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MainHeaderComponent,
    RouterModule,
    FooterComponent,
    OAuthModule.forRoot()
  ],
  providers: [IdentityServer4AuthService,UrlHelperService,OAuthService,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
