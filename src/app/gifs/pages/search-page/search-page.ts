import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/GifService';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styles: ``,
})
export default class SearchPage {

  private gifService= inject(GifService);
  public gifs = signal<Gif[]>([]);

  onSearch(event:string){
    console.log(event);
    this.gifService.searchGifs(event).subscribe(gifs =>{
      this.gifs.set(gifs)
    });
  }
}
