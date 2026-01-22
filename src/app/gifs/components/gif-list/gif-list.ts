import {Component, input, Input} from '@angular/core';
import {GifListItem} from './gif-list-item/gif-list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [
    GifListItem
  ],
  templateUrl: './gif-list.html',
  styles: ``,
})
export class GifList {

  public gifs =input.required<Gif[]>();
}
