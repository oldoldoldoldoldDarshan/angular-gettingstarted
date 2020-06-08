import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatVideoModule} from 'mat-video';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    VideoComponent,
    ProductDetailComponent,
    WelcomeComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatVideoModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
