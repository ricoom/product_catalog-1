import { Component, Output } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ProductComponent } from "../product/product.component";
import { CategoryComponent } from "../category/category.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [CommonModule, SearchBarComponent, ProductComponent, CategoryComponent]
})
export class ProductsComponent {
  filteredProducts:Product[]=[]
  allproducts:Product[]=[]
 


  constructor(private service:ProductServiceService) {

    this.getAll();

   }

  getAll(){
   
     this.service.getProducts().subscribe(data=>{this.allproducts=data,this.filteredProducts=data,console.log(this.filteredProducts)});

  }
  
  
  chosenCategory(cat:string){
this.service.getByCategory(cat).subscribe(data=>{this.filteredProducts=data})

  }
 

  public filterResults(text:string){
    if(!text){
      this.filteredProducts=this.allproducts
      return;
    }
    
    this.filteredProducts=this.allproducts.filter((Product: Product)=>{
      return Product?.title.toLowerCase().includes(text.toLowerCase());
    })

  }
}
