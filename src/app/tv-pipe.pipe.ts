import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvFilter'
})
export class TvPipePipe implements PipeTransform {

  public transform(value: any[], filterText: String) {
    console.log("Filter pipe called");
    return filterText.length>2 ? value.filter(x=> x.original_name.toLowerCase().includes(filterText.toLowerCase())): value
  }

}