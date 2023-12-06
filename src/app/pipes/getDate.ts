import { Pipe, PipeTransform } from '@angular/core';
import { InputOption } from '../models/inputOption';
import { Location } from '../models/location';

@Pipe({
  name: 'getDate',
  standalone: true,
})
export class GetDatePipe implements PipeTransform {

  transform(location: Location) {
    const { localtime_epoch: sec, tz_id: timezone } = location;
    const day = new Date((sec || 0) * 1000).toLocaleString('en-US', { weekday: 'long', timeZone: `${timezone}` });
    const date = new Date((sec || 0) * 1000).toLocaleDateString('default', { timeZone: `${timezone}` });
    const time = new Date((sec || 0) * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: `${timezone}`,
    });
    return ({
      day, date, time,
    });
  }

}
