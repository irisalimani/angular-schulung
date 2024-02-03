import { Component } from '@angular/core';
import {AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'contract-card-1',
  standalone: true,
    imports: [
        AvatarComponent,
        CardComponent,
        CardContentComponent,
        CardHeaderComponent
    ],
  templateUrl: './contract-card-1.component.html',
  styleUrl: './contract-card-1.component.scss'
})
export class ContractCard1Component {

}
