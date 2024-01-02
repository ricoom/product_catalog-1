import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:'',component:ProductsComponent},
    {path:'products',component:ProductsComponent},
    {path:'details',component:ProductDetailsComponent}
];
