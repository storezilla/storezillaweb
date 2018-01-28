import { Generic } from './generic';
import { Injectable } from '@angular/core';

@Injectable()
export class Manufacturer extends Generic {
    manufacturerId: number;
    manufacturerName: string;
}
