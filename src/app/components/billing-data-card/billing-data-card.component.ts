import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleDirective,
  MenuAddonDirective,
  MenuComponent,
  MenuTriggerDirective,
  SegmentedButtonComponent, SelectComponent,
  TableCellDirective,
  TableComponent,
  TableRowDirective
} from "@fundamental-ngx/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'billing-data-card',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableComponent,
    TableRowDirective,
    MenuComponent,
    ButtonComponent,
    MenuTriggerDirective,
    MenuAddonDirective,
    TableCellDirective,
    CardTitleDirective,
    FormsModule,
    SegmentedButtonComponent,
    SelectComponent
  ],
  templateUrl: './billing-data-card.component.html',
  styleUrl: './billing-data-card.component.scss'
})
export class BillingDataCardComponent {
  value = 'first';
  selectedValue: string | undefined;
  items: { name: string;}[] = [
    { name: 'Konto 1' },
    { name: 'Konto 2' },
    { name: 'Konto 3' }
  ];


}
