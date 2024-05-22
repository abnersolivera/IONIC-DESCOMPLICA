import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage  {
  items: any;
  constructor() { 
    this.items = [
      {
        title: 'Posto Cidade',
        subTitle: 'Gasolina R$4,80',
        image: 'https://cdn.icon-icons.com/icons2/1286/PNG/512/49_85223.png'
      },
      {
        title: 'Posto Expresso',
        subTitle: 'Alcool R$3,80',
        image: 'https://cdn.icon-icons.com/icons2/1286/PNG/512/49_85223.png'
      },
      {
        title: 'Central dos Combustíveis',
        subTitle: 'Gasolina R$4,80',
        image: 'https://cdn.icon-icons.com/icons2/1286/PNG/512/49_85223.png'
      }
    ];
  }

}
