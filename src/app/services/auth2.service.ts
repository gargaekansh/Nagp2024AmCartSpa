import { Injectable } from '@angular/core';
import { OAuthService ,OAuthEvent} from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { authConfig, passwordGrantConfig } from '../auth/auth.config';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IdentityServer4AuthService {
  private userProfile: any = null;
  private userInfoSubject = new BehaviorSubject<any>(null);
  public userInfo$ = this.userInfoSubject.asObservable();

  constructor(private oauthService: OAuthService,   private http: HttpClient,) {
    
    this.configureAuth(); // 
    this.handleAuthEvents();
  }
   /**
   * Checks if user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
  public setUserInfo(token: string) {
    const decodedToken = this.decodeToken(token);
   // this.userInfoSubject.next(decodedToken);
  }
  public decodeToken(token: string): any {
    localStorage.setItem('authToken', token); // Save the JWT token
    return jwtDecode(token); // Decode the JWT token
  }

    /**
   * Configures OAuth2 authentication settings.
   */
    private configureAuth() {
      console.debug('Initializing OAuth2 authentication...');
      this.oauthService.configure(authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService
        .loadDiscoveryDocumentAndTryLogin()
        .then(() => {
          if (this.oauthService.hasValidAccessToken()) {
            console.info('✅ User is authenticated. Fetching profile...');
           // this.loadUserProfile();
          } else {
            console.warn('⚠️ User is NOT authenticated.');
          }
        })
        .catch((error) => {
          console.error('❌ OAuth2 initialization failed:', error);
        });
    }

   /**
   * Handles authentication-related events.
   */
   private handleAuthEvents() {

    this.oauthService.events
      .pipe(filter((event: OAuthEvent) => event.type === 'token_received'))
      .subscribe(() => {
        console.info('🔄 Token received. Updating user profile...');
       // this.loadUserProfile();
      });

    this.oauthService.events
      .pipe(filter((event: OAuthEvent) => event.type === 'session_terminated'))
      .subscribe(() => {
        console.warn('⚠️ Session terminated. Logging out...');
        //this.logout();
      });
  }
   /**
   * Loads user profile from IdentityServer.
   */
   loadUserProfile(token:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    this.http.get(`${environment.identityServerURL}/connect/userinfo`, { headers })
      .subscribe(profile => {
        this.userProfile = profile;
        this.userInfoSubject.next(profile);
        console.info('✅ User profile loaded:', profile);
      });
  
  }

    /**
   * Initiates login process using password grant flow.
   */
    login(username: string, password: string): Observable<any> {5  
      console.info('🔐 Starting login process...');
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      });
  
      const params = new HttpParams()
        .set('grant_type', passwordGrantConfig.grantType)
        .set('client_id', passwordGrantConfig.clientId)
        .set('username', username)
        .set('password', password)
        .set('scope', passwordGrantConfig.scope);
  
      return this.http.post(`${environment.identityServerURL}/connect/token`, params,{headers});
    }
  // login() {
  //   this.oauthService.initLoginFlow();
  // }

  logout(token:any):Observable<any> {
    this.userInfoSubject.next(null); // Clear user info
    localStorage.removeItem('authToken');
    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    });
    const body = {
      id_token_hint: token,
      post_logout_redirect_uri: 'http://localhost:4200/',
    };
    alert('User logout successfully')
    return this.http.post(`${environment.identityServerURL}/connect/endsession`, body, { headers })
  }

 
}
