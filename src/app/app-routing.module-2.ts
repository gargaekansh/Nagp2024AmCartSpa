import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { FilterProductComponent } from './components/product/filter-product/filter-product.component';

 const routes: Routes = [
  { path: 'products', component: FilterProductComponent },
  { path: 'product/category/:slug', component: ListProductComponent },
  { path: 'product/item/:id', component: DetailProductComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterUserComponent },
 
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
