import { Component } from '@angular/core';

import { products } from '../products'; // file src/products.ts

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products]; // copiamo i prodotti (definiti in products) all'interno dell'array products con l'operatore spread (...)

  share() {
    console.log(this);
    window.alert('The product has been shared!');
  }

  /**
   * In questo file, nel componente padre dobbiamo definire il comportamente che si verifica quando l'utente fa click sul pulsante. Il genitore ProductListCompponente agisce quando il figlio solleva l'evento. Definiamo quindi il metodo onNotify(). Per far lavorare questo metodo, nel modello del componente padre. Per rendere funzionale questo metodo dobbiamo legare il componente figlio, mediante selector, al metodo onNotify() nel modello html di ProductLIstComponent
   */
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
