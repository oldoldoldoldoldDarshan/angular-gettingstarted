import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpace } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { VideoComponent } from '../video/video.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpace,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    // this will make router service to entire application
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate : [ProductDetailGuard], component: ProductDetailComponent}
    ])
  ]
})
export class ProductModule { }
