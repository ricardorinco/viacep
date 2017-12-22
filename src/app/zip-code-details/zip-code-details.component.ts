import { Component, Input } from '@angular/core';

import { Address } from '../models/address.model';

@Component({
  selector: 'app-zip-code-details',
  templateUrl: './zip-code-details.component.html'
})
export class ZipCodeDetailsComponent {

  @Input() address: Address;

  constructor() { }

}
