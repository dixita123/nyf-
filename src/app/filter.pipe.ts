import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from './api.service';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any[],title:string) {
 
  }
}
