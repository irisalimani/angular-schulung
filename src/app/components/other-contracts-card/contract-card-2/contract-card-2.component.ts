import { Component } from '@angular/core';
import {AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent} from "@fundamental-ngx/core";

@Component({
  selector: 'contract-card-2',
  standalone: true,
    imports: [
        AvatarComponent,
        CardComponent,
        CardContentComponent,
        CardHeaderComponent
    ],
  templateUrl: './contract-card-2.component.html',
  styleUrl: './contract-card-2.component.scss'
})
export class ContractCard2Component {

}
