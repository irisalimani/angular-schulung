import { Component } from '@angular/core';
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleDirective,
  ListComponent
} from "@fundamental-ngx/core";

@Component({
  selector: 'history-card',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    ListComponent,
    CardTitleDirective
  ],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss'
})
export class HistoryCardComponent {

}
