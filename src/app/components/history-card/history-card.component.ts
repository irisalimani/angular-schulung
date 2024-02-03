import { Component } from '@angular/core';
import {
  AvatarComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleDirective,
  ScrollbarDirective,
  TimelineAxis,
  TimelineComponent, TimelineHeaderInfoSubTitleDirective,
  TimelineNodeBodyComponent,
  TimelineNodeComponent,
  TimelineNodeDefDirective,
  TimelineNodeFooterComponent,
  TimelineNodeHeaderDirective,
  TimelineNodeHeaderInfoDirective,
  TimelineNodeHeaderInfoTextDirective,
  TimelineNodeHeaderInfoTitleDirective,
  TimelineSidePosition
} from "@fundamental-ngx/core";
import {DatePipe} from "@angular/common";
import {HISTORY_EXAMPLE_DATA} from "./history-card-data";

@Component({
  selector: 'history-card',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TimelineComponent,
    TimelineNodeComponent,
    TimelineNodeHeaderDirective,
    AvatarComponent,
    TimelineNodeHeaderInfoDirective,
    TimelineNodeBodyComponent,
    TimelineNodeFooterComponent,
    DatePipe,
    TimelineNodeDefDirective,
    CardTitleDirective,
    ScrollbarDirective,
    TimelineNodeHeaderInfoTitleDirective,
    TimelineNodeHeaderInfoTextDirective,
    TimelineHeaderInfoSubTitleDirective

  ],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss'
})
export class HistoryCardComponent {

  data: ({
    date: string;
    service: { name: string };
    title: string;
    status: string
  })[] = HISTORY_EXAMPLE_DATA;


  axis: TimelineAxis = 'vertical';
  layout: TimelineSidePosition = 'double';
}
