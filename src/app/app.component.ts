import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/UI/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { InputOption } from './models/inputOption';
import { TextInputComponent } from './components/UI/text-input/text-input.component';
import { LocationsService } from './services/location.service';
import { HttpClientModule } from '@angular/common/http';
import { GetOptionsPipe } from './pipes/getOptions';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentWeatherCardComponent } from './components/current-weather-card/current-weather-card.component';
import { ForecastService } from './services/forecast.service';
import { CurrentWeatherInfoComponent } from './components/current-weather-info/current-weather-info.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, FormsModule, TextInputComponent, HttpClientModule, GetOptionsPipe, FooterComponent, CurrentWeatherCardComponent, CurrentWeatherInfoComponent, ForecastCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LocationsService, ForecastService],
})
export class AppComponent {
  constructor(
    public locationService: LocationsService,
    public forecastService: ForecastService,
  ) {
  }

  loading = false;

  selectedOption: InputOption | undefined;

  getLocations(value: string) {
    this.locationService.getLocations(value)?.subscribe();
  }

  getForecast(value: string) {
    if (value) {
      this.loading = true;
      this.forecastService.getForecast(value).subscribe(() => {
        this.loading = false;
      });
    } else {
      this.forecastService.clearForecast();
    }
  }
}
