import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortWeekDay',
  standalone: true
})
export class ShortWeekDayPipe implements PipeTransform {

  transform(timeInSec: number): string {
    return new Date(timeInSec * 1000).toLocaleString('en-US', { weekday: 'short' });
  }

}
