import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { StoreEditComponent } from '../storeedit/storeedit.component';
import { OpenStore } from '../model/openstore';
@Component({
  selector: 'sza-storelist',
  templateUrl: './szastore-list.component.html',
  styleUrls: ['./szastore-list.component.css']
})
export class SZAStoreListComponent implements OnInit {

  storeTitle = 'Store';
  private stores: OpenStore[];

  constructor(private router: Router, private storeService: StoreService, private dialog: MatDialog,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllStores();
  }

  getAllStores() {
    this.storeService.getStores()
    .subscribe(response => {
      this.stores = response.json();
    });
  }

  editStore(store: OpenStore) {
      this.storeService.getStoreById(store.storeId).subscribe( response => {
        store = response.json();
        store.isCreated = true;
        this.dialog.open(StoreEditComponent, {
          height: '450px', data: store })
          .afterClosed().subscribe( response2 => {
            this.getAllStores();
        });
      });
  }

  addStore() {
    let store = new OpenStore();
    store.isCreated = false;
    this.dialog.open(StoreEditComponent, {
      height: '450px', data: store })
      .afterClosed().subscribe( response2 => {
        this.getAllStores();
    });
  }

  removeStore(store: OpenStore) {
    this.storeService.deleteStore(store.storeId).subscribe(
      response => {
        this.getAllStores();
      });
  }
}
