import { Component, EventEmitter, Output } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],

  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
close:boolean=false
open:boolean=true

categories:any[]=[]
@Output() categoryEvent=new EventEmitter<string>()
constructor(private service:ProductServiceService){
this.getCategory()
}
  getCategory(){
   this.service.getCategories().subscribe(cats=>this.categories=cats);

  }
  selectCategory(cat:string){
this.categoryEvent.emit(cat);
console.log(cat)
  }

closeSide(){
this.close=false;
this.open=true
}
openSide(){
this.open=false
this.close=true
}
}
