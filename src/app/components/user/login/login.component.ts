import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
 import { IdentityServer4AuthService } from '../../../services/auth2.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RegisterUserComponent,
  ],
  templateUrl: './login.component.html',
  providers: [
     
  ],
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  // socialUser: SocialUser | null = null;

  constructor(
     private fb: FormBuilder,
     private authService: IdentityServer4AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // // Subscribe to social auth state changes
    // this.socialAuthService.authState.subscribe((user: SocialUser) => {
    //   this.socialUser = user;
    //   if (user) {
    //     this.handleSocialLogin(user);
    //   }
    // });
  }

  // // Handle Google Sign-In
  // handleSocialLogin(user: SocialUser): void {
  //   this.authService.googleLogin(user.idToken).subscribe(
  //     (response) => {
  //       console.log('Google login success', response);
  //       // Store token and navigate user
  //       this.authService.setUserInfo(response.token);
  //     },
  //     (error) => {
  //       console.error('Google login error', error);
  //     }
  //   );
  // }

  // // Form-based sign-in
  onSubmit(): void {
    const formData = this.loginForm.value;
    console.log(formData);
    this.authService.login(formData.email,formData.password).subscribe(
      (response) => {
        console.log('Login success', response);
        this.authService.loadUserProfile(response.access_token);
        this.authService.setUserInfo(response.access_token);
        this.router.navigate(['/']);
      },
      (error) => {
        alert('Email or password is incorrect');
      }
    );
  }
  goToRegistration(){
    console.log('Navigating to registration page');
    this.router.navigate(['user/register']);
  }
  // socialServiceLogin() {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
}
