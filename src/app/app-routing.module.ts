import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';

const routes: Routes = [
        {path: 'products', component: ProductListComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'}    
];

// this will not make router service to entire application - need verification
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}