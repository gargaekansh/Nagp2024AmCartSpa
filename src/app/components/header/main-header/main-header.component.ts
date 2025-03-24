import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuggestionComponent } from '../../search/suggestion/suggestion.component';
import { Router } from '@angular/router';
import { IdentityServer4AuthService } from '../../../services/auth2.service';
import { OAuthService, AuthConfig, OAuthLogger ,UrlHelperService} from 'angular-oauth2-oidc';
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, 
    SuggestionComponent,
    RouterModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent implements OnInit {
  userName: string = '';
  products: { name: string, slug: string }[] = []; // Add products array
  cartCount: number = 0; // Initialize cart count
  isLoggedIn: boolean = false;
  showRegisterComponent: boolean = false;
  showLoginComponent: boolean = false;

  constructor(
    // private headerService: HeaderService,
    private router: Router,
    private identityServer4AuthService: IdentityServer4AuthService
  ) {
    
  // // Fetch products from the service
    // this.headerService.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
  }

  ngOnInit(): void {
    // this.identityServer4AuthService.login('administrator@localhost','Administrator1!').subscribe(
    // )
    // Subscribe to cart count updates
    // this.cartService.cartCount$.subscribe((count) => {
    //   this.cartCount = count;
    //   console.log('Cart count in header:', this.cartCount); // Log the cart count
    // });

    // Subscribe to the userInfo$ observable to get updates
    this.identityServer4AuthService.userInfo$.subscribe((userInfo) => {
      if (userInfo) {
        this.userName = userInfo.name; // Set username from decoded token
        this.isLoggedIn = true;
      } else {
        this.userName = '';
        this.isLoggedIn = false;
      }
    });

    if (this.identityServer4AuthService.isAuthenticated()) {
      // Try to load the user profile
      const token  = localStorage.getItem('authToken');
      this.identityServer4AuthService.loadUserProfile(token)
    }

    // if (this.identityServer4AuthService.isAuthenticated()) {
    //   const token = localStorage.getItem('authToken')?.toString();
    //   const decodedToken = this.identityServer4AuthService.decodeToken(token!);
    //   this.userName = decodedToken.name;
    //   this.isLoggedIn = true;
    // }
  }

  // showProducts(slug: string) {
  //   this.router.navigate(['/product', slug]);
  // }

  goToCart() {
    this.router.navigate(['cart']);
  }
 
  goToLogin() {
    console.log('Navigating to login page');
    this.router.navigate(['user/login']);
  }
  goToRegistration(){
    console.log('Navigating to registration page');
    this.router.navigate(['user/register']);
  }

  logout() {
    const token  = localStorage.getItem('authToken');
   
    this.identityServer4AuthService.logout(token).subscribe( res =>{
    });
    this.router.navigate(['/']);
  }

  // goToOrderList() {
  //   this.router.navigate(['order/list']);
  // }

  // goToWishList() {
  //   this.router.navigate(['user/wishlist']);
  // }

  goToDetail(id: string) {
    if (!id) {
        console.error('Product ID is null or undefined');
        return;
    }
    //alert('Navigating to product detail page for product ID: ' + id);  
    console.log('Navigating to product detail page for product ID:', id);
    this.router.navigate(['/product/item', id]);
}
}

