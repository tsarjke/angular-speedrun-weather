import { Condition } from './condition';

export interface ForecastForDay {
  date_epoch: number;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: Condition;
  };
}
