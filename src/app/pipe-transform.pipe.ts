import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class PipeTransformPipe implements PipeTransform {

  public transform(value: any[], filterText: String) {
    console.log("Filter pipe called");
    return filterText.length>2 ? value.filter(x=> x.original_title.toLowerCase().includes(filterText.toLowerCase())): value
  }

}
//change values
//original_title
//original_name
