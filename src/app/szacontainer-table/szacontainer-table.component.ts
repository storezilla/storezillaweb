import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sza-containertable',
  templateUrl: './szacontainer-table.component.html',
  styleUrls: ['./szacontainer-table.component.css'],
})
export class SZAContainerTableComponent implements OnInit {

  @Input() containerTitle: string;
  constructor() { }

  ngOnInit() {
    console.log(this.containerTitle);
  }

}
