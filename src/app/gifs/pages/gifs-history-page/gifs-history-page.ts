import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-gifs-history-page',
  imports: [],
  templateUrl: './gifs-history-page.html',

})
export default class GifsHistoryPage {

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params["query"])
  ));
}
