import { Component, Input } from '@angular/core';
import { ForecastForDay } from '../../models/forecastForDay';
import { NgForOf } from '@angular/common';
import { ShortWeekDayPipe } from '../../pipes/shortWeekDay.pipe';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [
    NgForOf,
    ShortWeekDayPipe,
  ],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.scss',
})
export class ForecastCardComponent {
  @Input() data: ForecastForDay[];
}
