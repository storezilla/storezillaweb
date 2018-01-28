import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenStore } from '../model/openstore';
import { StoreService } from '../services/store.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sza-storeedit',
  templateUrl: './storeedit.component.html',
  styleUrls: ['./storeedit.component.css']
})
export class StoreEditComponent implements OnInit {

  constructor(private storeService: StoreService, private route: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) private store: OpenStore,
    public dialogRef: MatDialogRef<StoreEditComponent>) {
   }

  ngOnInit() {
  }

  addStore(f: FormControl) {
    this.storeService.addStore(f.value).subscribe(response => {
      this.dialogRef.close();
    });
  }
  updateStore(f: FormControl) {
    this.storeService.updateStore(f.value).subscribe(response => {
      this.dialogRef.close();
    });
  }
  submit(f: FormControl) {
    !this.store.isCreated ? this.addStore(f) : this.updateStore(f);
  }
}
