import { Component } from '@angular/core';
import {FundamentalNgxCoreModule} from "@fundamental-ngx/core";
import {ContactInfoCardComponent} from "../contact-info-card/contact-info-card.component";
import {OtherContractsCardComponent} from "../other-contracts-card/other-contracts-card.component";
import {FirstContractCardComponent} from "./first-contract-card/first-contract-card.component";
import {SecondContractCardComponent} from "./second-contract-card/second-contract-card.component";


@Component({
  selector: 'supply-contracts-card',
  standalone: true,
  imports: [FundamentalNgxCoreModule, ContactInfoCardComponent, OtherContractsCardComponent, FirstContractCardComponent, SecondContractCardComponent],
  templateUrl: './supply-contracts-card.component.html',
  styleUrl: './supply-contracts-card.component.scss'
})
export class SupplyContractsCardComponent {

}
