import { Component } from '@angular/core';
import {SideMenuOptions} from './side-menu-options/side-menu-options.component';
import {SideMenuHeader} from './side-menu-header/side-menu-header.component';


@Component({
  selector: 'side-menu',
  imports: [
    SideMenuOptions,
    SideMenuHeader
  ],
  templateUrl: './side-menu.html',
  styles: ``,
})
export class SideMenu {

}
