import { Component, OnInit, Input } from '@angular/core';
import { AutoCompleteService } from '../services/autocompleteservice.service';
import { Generic } from '../model/generic';
import 'rxjs/Rx';
import { Manufacturer } from '../model/Manufacturer';
import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomAutoCompleteComponent),
  multi: true
};

@Component({
  selector: 'sza-customautocomplete',
  templateUrl: './customautocomplete.component.html',
  styleUrls: ['./customautocomplete.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomAutoCompleteComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() ariaLabel: string;
  @Input() objectNameProperty: string;
  private objects: Generic[];
  tempobjects = [];
  private innerValue: any = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private autoCompleteService: AutoCompleteService) {
  }

  ngOnInit() {
    this.autoCompleteService.getAllObjects().subscribe(
      response => {
        this.objects = response.json();
        this.tempobjects = this.objects;
      });
  }
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
  if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
  }
}

onBlur() {
  this.onTouchedCallback();
}

writeValue(value: any) {
  if (value !== this.innerValue) {
      this.innerValue = value;
  }
}

registerOnChange(fn: any) {
  this.onChangeCallback = fn;
}

registerOnTouched(fn: any) {
  this.onTouchedCallback = fn;
}

  filterObjects(val: string) {
    if (val) {
      const filterValue = val.toLowerCase();
      return this.objects.filter(object => object[this.objectNameProperty].toLowerCase().startsWith(filterValue));
    }
    return this.objects;
  }
}
