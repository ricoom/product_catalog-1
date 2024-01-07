import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CartComponent } from "../cart/cart.component";

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [SearchBarComponent, CartComponent]
})
export class NavBarComponent {

}
