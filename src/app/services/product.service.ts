import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductFilterView, ProductView } from '../models/product.model';
import { environment } from '../../environments/environment';
// import { OrderRequest } from '../models/orderRequest.model';
// import { CartItem } from '../models/cart.model';
// import { WishListBase, WishListQuery } from '../models/wishlist.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.productApiUrl;
  private productItemUrl = environment.productItemApiUrl;
  constructor(private http: HttpClient) {}

  getCategories(slug: string): Observable<ProductView[]> {
    return this.http.get<ProductView[]>(`${this.apiUrl}/category/${slug}`).pipe(
      catchError((error) => {
        console.error('Error :', error);
        return throwError(() => error);
      })
    );
  }
  getProducts(url: string): Observable<ProductFilterView[]> {
    return this.http.get<ProductFilterView[]>(`${this.apiUrl}${url}`).pipe(
      catchError((error) => {
        console.error('Error :', error);
        return throwError(() => error);
      })
    );
  }
  getItem(id:string): Observable<any> {
    return this.http.get<any>(`${this.productItemUrl}${id}`).pipe(
      catchError((error) => {
        console.error('Error :', error);
        return throwError(() => error);
      })
    );
  }
  
}
