import { Location } from './location';
import { Condition } from './condition';

export interface CurrentWeatherData {
  cloud: number;
  feelslike_c: number;
  temp_c: number;
  is_day: 1 | 0;
  wind_kph: number;
  precip_mm: number;
  humidity: number;
  wind_degree: number;
  condition: Condition;
  location: Location;
};
