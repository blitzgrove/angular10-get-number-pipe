import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getNumber', pure: true })
export class GetNumberPipe implements PipeTransform {
  transform(value: any, args?: any): string[] {
    return /\d+/g.exec(value);
  }
}