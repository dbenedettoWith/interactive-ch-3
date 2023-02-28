import { Product } from './../models/product.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject, tap } from 'rxjs';

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

  getProductsSubscription(): void {
    this.dataService.getProducts().subscribe((products) => {
      console.log(this.products);
      products.forEach((product) => {
        return { ...product, available: product.inStock };
      });
      this.products = products;
    });
  }
}
