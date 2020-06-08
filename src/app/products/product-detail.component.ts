import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle: string = "Product Detail";
product: Iproduct;
id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = +this.route.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
