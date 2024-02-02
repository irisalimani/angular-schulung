import { Component } from '@angular/core';
import {AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'third-contract-card',
  standalone: true,
    imports: [
        AvatarComponent,
        CardComponent,
        CardContentComponent,
        CardHeaderComponent
    ],
  templateUrl: './third-contract-card.component.html',
  styleUrl: './third-contract-card.component.scss'
})
export class ThirdContractCardComponent {

}
