import { Component, OnInit } from '@angular/core';
 import { UserService } from '../../../services/user.service';
import { RegisterUser } from '../../../models/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 import { IdentityServer4AuthService } from '../../../services/auth2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent implements OnInit{
  user: RegisterUser = {
    mobileNumber: '',
    email: '',
    password: '',
    gender:''
  };
  apiErrorMessage: string = '';

  constructor(
    private userService: UserService,
    private authService: IdentityServer4AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.onSubmit();
  }

  onSubmit() {
    this.apiErrorMessage = ''
    if (this.user.gender && this.user.email && this.user.password && this,this.user.mobileNumber) {
      this.userService.registerUser(this.user).subscribe(
        (response) => {
          alert('User registered successfully:');
          this.router.navigate(['/user/login']);
        },
        (error) => {
          this.apiErrorMessage = error?.error?.errors[0] || 'An unexpected error occurred. Please try again.';
        }
      );
    }
  }
}
