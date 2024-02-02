import { Component } from '@angular/core';
import {FundamentalNgxCoreModule} from "@fundamental-ngx/core";
@Component({
  selector: 'contact-info-card',
  standalone: true,
  imports: [FundamentalNgxCoreModule],
  templateUrl: './contact-info-card.component.html',
  styleUrl: './contact-info-card.component.scss'
})
export class ContactInfoCardComponent {

  data = {
    id: 'employee-base',
    title: 'Employee',
    subHeader: {
      title: 'Fritz Fischer',
      avatar: 'https://picsum.photos/500/500?people'
    },
    groups: [
      {
        items: [
          {
            label: 'Adresse',
            value: 'Frankfurter Straße 271 / 35392 Gießen / DE'
          },
          {
            label: 'Email',
            value: 'fritz.fischer@test.ch'
          },
          {
            label: 'Mobiltelefon',
            value: '+1 316 555 5555'
          },
          {
            label: 'Geburtsdatum',
            value: '-'
          },
          {
            label: 'Kundennummer',
            value: '26534693'
          },
          {
            label: 'Telefon',
            value: '-'
          },
          {
            label: 'Kontoklasse',
            value: 'PRIV-Privatkunde'
          },
          {
            label: 'Opt-In',
            value: ''
          },
        ]
      },
    ]
  };
}
