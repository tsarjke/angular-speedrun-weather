import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Forecast } from '../models/forecast';

@Injectable()
export class ForecastService {
  constructor(
    private http: HttpClient,
  ) {
  }

  httpHeaders: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'a72076a1b6mshbfc5e5cb10dbbcbp12a567jsndf3866fc48b1',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  });

  forecast: Forecast | null;

  clearForecast() {
    this.forecast = null;
  }

  getForecast(value: string): Observable<Forecast> {
    return this.http.get<Forecast>('https://weatherapi-com.p.rapidapi.com/forecast.json', {
      headers: this.httpHeaders,
      params: new HttpParams({
        fromObject: {
          q: value,
          days: '3', // maximum for free:)
        },
      }),
    }).pipe(
      tap(forecast => this.forecast = forecast),
    );
  }
}
