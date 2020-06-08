import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { Iproduct } from './product';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Darshan Yadav Product Management';
  imageWidth = 30;
  imageHeight= 30;
  // imagemargine = 40;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: Iproduct[];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    //this.productService.fetchProducts();
    //this.productService.Iproduct.subscribe(res => this.products = res);
     this.productService.getProductsFromHttp().subscribe(res => this.products = res);
  }

  get getlistFilter(): string {
    return this.listFilter;
  }
  set setlistFilter(value: string) {
    this.listFilter;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list : ' + message;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }


}