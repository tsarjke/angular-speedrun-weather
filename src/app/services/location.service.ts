import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Location } from '../models/location';

@Injectable()
export class LocationsService {
  constructor(
    private http: HttpClient,
  ) {
  }

  httpHeaders: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'a72076a1b6mshbfc5e5cb10dbbcbp12a567jsndf3866fc48b1',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  });

  locations: Location[] = [];

  fetchLocations(searchStr: string): Observable<Location[]> {
    return this.http.get<Location[]>('https://weatherapi-com.p.rapidapi.com/search.json', {
      headers: this.httpHeaders,
      params: new HttpParams({
        fromObject: {
          q: searchStr,
        },
      }),
    }).pipe(
      tap(locations => this.locations = locations),
    );
  }

  clearLocations() {
    this.locations = [];
  }

  getLocations(searchStr: string) {
    if (!searchStr) {
      this.clearLocations();
      return;
    } else {
      return this.fetchLocations(searchStr);
    }
  }
}
