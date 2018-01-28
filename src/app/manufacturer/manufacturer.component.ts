import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../model/manufacturer';
import 'rxjs/Rx';

@Component({
  selector: 'sza-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  private manufacturers: Manufacturer[];
  tdManufacturers = [];

  constructor(private manufacturerService: ManufacturerService) {
   }
  ngOnInit() {
    this.manufacturerService.getAllManufacturers().subscribe(
      response => {
        this.manufacturers = response.json();
        this.tdManufacturers = this.manufacturers;
      });
  }

  filterManufacturers(val: string) {
    if (val) {
      const filterValue = val.toLowerCase();
      return this.manufacturers.filter(manufacturer => manufacturer.manufacturerName.toLowerCase().startsWith(filterValue));
    }
    return this.manufacturers;
  }
}
