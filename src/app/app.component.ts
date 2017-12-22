import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ViaCepService } from './services/via-cep.service';

import { Address } from './models/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  zipcodeMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  searchAddress: Address;

  constructor(
    private toastr: ToastrService,
    private viacepService: ViaCepService
  ) { }

  onClickZipcode(zipcode: string) {
    this.viacepService.getAddressByZipCode(zipcode)
      .subscribe(
        address => {
          if (address.erro === true) {
            this.searchAddress = undefined;
            this.toastr.warning('ZIP Code not found.', 'Ops...');
          } else {
            this.searchAddress = address;
          }
        },
        error => { this.toastr.error('Error: Enter a valid ZIP Code.', 'Ops...'); }
      );
  }

}
