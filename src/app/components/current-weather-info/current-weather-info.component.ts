import { Component, Input, OnChanges } from '@angular/core';
import { CurrentWeatherData } from '../../models/currentWeatherData';
import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { InfoCondition } from '../../models/infoCondition';

@Component({
  selector: 'app-current-weather-info',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
  ],
  templateUrl: './current-weather-info.component.html',
  styleUrl: './current-weather-info.component.scss',
})
export class CurrentWeatherInfoComponent implements OnChanges {
  @Input() data: CurrentWeatherData;
  currentCondition: InfoCondition[];
  elementStyle: {};

  ngOnChanges(): void {
    this.elementStyle = {
      transform: `translate(${this.data.wind_degree - 180}deg)`
    }
    this.currentCondition = [
      {
        text: 'Precipitation (mm)', value: this.data.precip_mm, iconName: 'precip',
      },
      {
        text: 'Wind speed (km/h)', value: this.data.wind_kph, iconName: 'wind-speed',
      },
      {
        text: 'Wind direction',
        value: this.data.wind_degree - 180,
        iconName: 'wind-dir',
        iconValueName: 'arrow',
      },
      {
        text: 'Humidity (%)', value: this.data.humidity, iconName: 'humidity',
      },
      {
        text: 'Cloud (%)', value: this.data.cloud, iconName: 'cloud',
      },
    ];
  }
}
