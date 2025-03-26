import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  ProductItemView,
  ProductVariantSizeColor,
} from '../../../models/productItem.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VariantType } from '../../../models/enums';
// import { ProductItemService } from '../../../services/productItem.service';
//import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart.model';
// import { TruncatePipe } from '../../../truncate.pipe';
// import { ListReviewComponent } from '../../review/list-review/list-review.component';
// import { AddReviewComponent } from '../../review/add-review/add-review.component';
// import { AuthService } from '../../../services/auth.service';
import { LoaderComponent } from '../../common/loader/loader.component';
//import { WishListBase } from '../../../models/wishlist.model';
import { ProductService} from '../../../services/product.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
//import { WishListService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    //TruncatePipe,
    // ListReviewComponent,
    // AddReviewComponent,
    // LoaderComponent,
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})

export class DetailProductComponent implements OnInit {
  product = {
    image: 'https://via.placeholder.com/300', // Replace with actual product image
    name: 'Sample Product',
    price: 999.99,
    rating:3,
    description: 'This is a sample product with a great description. Buy now!'
  };
  productId!: string;
  constructor(private productService:ProductService,private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!; // Fetch product ID from route
      this.productService.getItem(this.productId).subscribe( res =>{
        this.product.image =res.image;
        this.product.name =res.name;
        this.product.description =res.description;
        this.product.price = res.price;
        this.product.rating = res.rating.rate
      }

      )
    });
  
  }
 
}
