import { Pipe,PipeTransform } from '@angular/core'

@Pipe({
    name:'name'
})
export class namepipe implements PipeTransform {
 transform(value: string, ...args: string[]): string{
     return value+""+args[0];
 }
}