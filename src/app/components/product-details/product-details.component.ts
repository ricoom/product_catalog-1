import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../models/product';
import { ProductComponent } from "../product/product.component";

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [ProductComponent]
})
export class ProductDetailsComponent {
 id!:any;
 curImage:any=0
 curProduct!:Product

constructor(private route:ActivatedRoute, private service:ProductServiceService){
  this.route.params.subscribe(params=>{
this.id=params['id']
  })
  this.fidProduct();
}
fidProduct(){
 this.service.findOne(this.id).subscribe(product=>this.curProduct=product);
}
display(i:any){
this.curImage=i;
}
}
