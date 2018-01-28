import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatIconModule, MatListModule, MatTableModule, MatTabsModule, MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule, MatCardModule, MatButtonToggleModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SZAContainerTableComponent } from './szacontainer-table/szacontainer-table.component';
import { SZAStoreListComponent } from './szastore-list/szastore-list.component';
import { StoreService } from './services/store.service';
import { StoreEditComponent } from './storeedit/storeedit.component';
import { SZACategoryListComponent } from './category-list/category-list.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { CategoryEditComponent } from './categoryedit/categoryedit.component';
import { CategoryService } from './services/category.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './productedit/productedit.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ProductService } from './services/product.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ManufacturerService } from './services/manufacturer.service';
import { CustomAutoCompleteComponent } from './customautocomplete/customautocomplete.component';
import { AutoCompleteService } from './services/autocompleteservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SZAContainerTableComponent,
    SZAStoreListComponent,
    StoreEditComponent,
    SZACategoryListComponent,
    CategoryEditComponent,
    ProductListComponent,
    ProductEditComponent,
    ManufacturerComponent,
    CustomAutoCompleteComponent
  ],
  entryComponents: [
    StoreEditComponent,
    CategoryEditComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    QuillEditorModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    RouterModule.forRoot([
      { path: 'stores', component: SZAStoreListComponent },
      { path: 'stores/edit/:storeId', component: StoreEditComponent },
      { path: 'categories', component: SZACategoryListComponent },
      { path: 'products', component: ManufacturerComponent }
    ])
  ],
  providers: [
    StoreService,
    CategoryService,
    ProductService,
    ManufacturerService,
    AutoCompleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
