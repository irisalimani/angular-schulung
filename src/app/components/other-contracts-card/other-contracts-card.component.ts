import { Component } from '@angular/core';
import {
  CardComponent,
  CardContentComponent,
  CardCounterDirective,
  CardDefinitionDirective,
  CardHeaderComponent,
  CardSubtitleDirective,
  CardTitleDirective,
  FixedCardLayoutComponent, LayoutGridColDirective, LayoutGridComponent, LayoutGridRowDirective,
  ListComponent, ListItemComponent, ListTitleDirective, ScrollbarDirective
} from "@fundamental-ngx/core";
import {FirstContractCardComponent} from "../supply-contracts-card/first-contract-card/first-contract-card.component";
import {
  SecondContractCardComponent
} from "../supply-contracts-card/second-contract-card/second-contract-card.component";
import {ThirdContractCardComponent} from "../supply-contracts-card/third-contract-card/third-contract-card.component";

@Component({
  selector: 'other-contracts-card',
  standalone: true,
  imports: [
    CardComponent,
    CardContentComponent,
    CardCounterDirective,
    CardDefinitionDirective,
    CardHeaderComponent,
    CardSubtitleDirective,
    CardTitleDirective,
    FixedCardLayoutComponent,
    ListComponent,
    ListItemComponent,
    ListTitleDirective,
    ScrollbarDirective,
    LayoutGridComponent,
    LayoutGridColDirective,
    FirstContractCardComponent,
    LayoutGridRowDirective,
    SecondContractCardComponent,
    ThirdContractCardComponent
  ],
  templateUrl: './other-contracts-card.component.html',
  styleUrl: './other-contracts-card.component.scss'
})
export class OtherContractsCardComponent {

}
