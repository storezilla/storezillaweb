import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ProductEditComponent } from '../productedit/productedit.component';

@Component({
  selector: 'sza-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productTitle = 'Product';
  private products: Product[];

  constructor(private router: Router, private productService: ProductService, private dialog: MatDialog,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts()
    .subscribe(response => {
      this.products = response.json();
    });
  }

  editProduct(product: Product) {
      this.productService.getProductById(product.productId).subscribe( response => {
        product = response.json();
        product.isCreated = true;
        this.dialog.open(ProductEditComponent, {
          height: '450px', width: '1000px', panelClass: 'myClass', data: product })
          .afterClosed().subscribe( response2 => {
            this.getAllProducts();
        });
      });
  }

  addProduct() {
    let product = new Product();
    product.isCreated = false;
    this.dialog.open(ProductEditComponent, {
      height: '450px', data: product })
      .afterClosed().subscribe( response2 => {
        this.getAllProducts();
    });
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product.productId).subscribe(
      response => {
        this.getAllProducts();
      });
  }
}
