import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sza-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.css']
})
export class CategoryEditComponent implements OnInit {

  public editorOptions = { placeholder: 'Enter Category Description here...'};
  public editorContent: string;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) private category: Category,
    public dialogRef: MatDialogRef<CategoryEditComponent>) {
   }

  ngOnInit() {
  }

  addCategory(f: FormControl) {
    this.categoryService.addCategory(f.value).subscribe(response => {
      this.dialogRef.close();
    });
  }
  updateCategory(f: FormControl) {
    this.categoryService.updateCategory(f.value).subscribe(response => {
      this.dialogRef.close();
    });
  }
  submit(f: FormControl) {
    !this.category.isCreated ? this.addCategory(f) : this.updateCategory(f);
  }
}
