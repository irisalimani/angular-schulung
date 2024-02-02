import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FundamentalNgxCoreModule} from "@fundamental-ngx/core";
import {ContactInfoCardComponent} from "./components/contact-info-card/contact-info-card.component";
import {SupplyContractsCardComponent} from "./components/supply-contracts-card/supply-contracts-card.component";
import {OtherContractsCardComponent} from "./components/other-contracts-card/other-contracts-card.component";
import {BillingDataCardComponent} from "./components/billing-data-card/billing-data-card.component";
import {HistoryCardComponent} from "./components/history-card/history-card.component";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FundamentalNgxCoreModule, ContactInfoCardComponent, SupplyContractsCardComponent, OtherContractsCardComponent, BillingDataCardComponent, HistoryCardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';
}
