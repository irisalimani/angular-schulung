import { Component } from '@angular/core';
import {AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'first-contract-card',
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardComponent,
    AvatarComponent,
    CardContentComponent
  ],
  templateUrl: './first-contract-card.component.html',
  styleUrl: './first-contract-card.component.scss'
})
export class FirstContractCardComponent {

}
