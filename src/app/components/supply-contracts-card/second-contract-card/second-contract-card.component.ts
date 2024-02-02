import { Component } from '@angular/core';
import {AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'second-contract-card',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    AvatarComponent,
    CardContentComponent
  ],
  templateUrl: './second-contract-card.component.html',
  styleUrl: './second-contract-card.component.scss'
})
export class SecondContractCardComponent {

}
