import { Pipe, PipeTransform } from '@angular/core';
import { InputOption } from '../models/inputOption';
import { Location } from '../models/location';

@Pipe({
  name: 'getOptions',
  standalone: true,
})
export class GetOptionsPipe implements PipeTransform {

  transform(locations: Location[]): InputOption[] {
    return locations.map(({name, region, country, lat, lon}) => ({ text: `${name}${region && ` - ${region}`} - ${country}`, value: `${lat},${lon}` }));
  }

}
