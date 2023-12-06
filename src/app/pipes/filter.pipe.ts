import { Pipe, PipeTransform } from '@angular/core';
import { InputOption } from '../models/inputOption';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {

  transform(items: InputOption[], search: string): InputOption[] {
    if (!search.length) return [];
    return items.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
  }

}
