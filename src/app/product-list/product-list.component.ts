import { Component } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private dataService: DataRetrieverService) {}

  ngOnInit(): void {
    this.getProductsSubscription();
  }

  getProductsSubscription() {
    this.dataService.getProducts().subscribe((products) => {
      products.forEach((product) => {
        product.available = product.inStock;
      });
      this.products = products;
      console.log(this.products);
    });
  }
}
