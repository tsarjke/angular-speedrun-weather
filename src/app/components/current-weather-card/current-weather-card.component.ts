import { Component, Input } from '@angular/core';
import { GetDatePipe } from '../../pipes/getDate';
import { TitleCasePipe } from '@angular/common';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-current-weather-card',
  standalone: true,
  imports: [
    GetDatePipe,
    TitleCasePipe,
  ],
  templateUrl: './current-weather-card.component.html',
  styleUrl: './current-weather-card.component.scss',
})
export class CurrentWeatherCardComponent{
  @Input() data: Forecast;
}
