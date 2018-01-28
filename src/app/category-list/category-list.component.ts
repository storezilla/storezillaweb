import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CategoryEditComponent } from '../categoryedit/categoryedit.component';
import { Category } from '../model/category';

@Component({
  selector: 'sza-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class SZACategoryListComponent implements OnInit {

  categoryTitle = 'Category';
  private categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService, private dialog: MatDialog,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategories()
    .subscribe(response => {
      this.categories = response.json();
    });
  }

  editCategory(category: Category) {
      this.categoryService.getCategoryById(category.categoryId).subscribe( response => {
        category = response.json();
        category.isCreated = true;
        this.dialog.open(CategoryEditComponent, {
          height: '450px', width: '1000px', panelClass: 'myClass', data: category })
          .afterClosed().subscribe( response2 => {
            this.getAllCategories();
        });
      });
  }

  addCategory() {
    let category = new Category();
    category.isCreated = false;
    this.dialog.open(CategoryEditComponent, {
      height: '450px', data: category })
      .afterClosed().subscribe( response2 => {
        this.getAllCategories();
    });
  }

  removeCategory(category: Category) {
    this.categoryService.deleteCategory(category.categoryId).subscribe(
      response => {
        this.getAllCategories();
      });
  }
}
