import { Component } from '@angular/core';

interface MenuOption {
  label: string;
  subLabel:string;
  route: string;
  icon: string;
}

@Component({
  selector: 'side-menu-options',
  imports: [],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptions {

  menuOptions:MenuOption[] = [
    {
      icon:'fa-solid fa-chart-line',
      label:'Trending',
      subLabel:'Gifs Populares',
      route:'/dashboard/trending'
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'Buscador',
      subLabel:'Buscar Gifs',
      route:'/dashboard/search'
    },
  ]
}
