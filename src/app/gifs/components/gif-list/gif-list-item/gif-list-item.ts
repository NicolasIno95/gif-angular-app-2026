import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styles: ``,
})
export class GifListItem {
  public url = input.required<string>();
}
