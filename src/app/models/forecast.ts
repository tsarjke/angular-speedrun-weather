import { Location } from './location';
import { ForecastForDay } from './forecastForDay';
import { CurrentWeatherData } from './currentWeatherData';

export interface Forecast {
  current: CurrentWeatherData;
  location: Location;
  forecast: {
    forecastday: ForecastForDay[]
  };
}
