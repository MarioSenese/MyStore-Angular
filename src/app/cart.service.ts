/**
 * Non è un componente bensì un servizio.
 * Per creare un nuovo servizio basta eseguire il comando
 *      ng generate service [nome_servizio]
 *
 * Per il nostro esercizio, abbiamo definito tale servizio per memorizzare le informazioni sui prodotti nel carrello
 */

import { Injectable } from '@angular/core';
import { Product } from './products'; // importazione della interfaccia Products da /products.ts
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// servizio importato nel componente ProductDetailsComponent. Questo perché dal dettaglio prodotto abbiamo la possibilità di aggiungere un articolo al carrello
export class CartService {
  constructor(private http: HttpClient) {}

  // definizione di una proprietà "items" per memorizzare i prodotti aggiunti al carrello
  items: Product[] = []; // items è il nome della proprietà ed Product è il tipo di quella proprietà

  /**
   * Definizione dei metodi per aggiungere, restituire e cancellazione degli articoli del carrello
   */

  // addToCart: metodo che aggiunge un prodotto a un array di articoli
  addToCart(product: Product) {
    this.items.push(product);
  }

  // getItems: metodo che raccoglie gli articoli che gli utenti aggiungono al carrello e restituisce ogni articolo con la quantità associata
  getItems() {
    return this.items;
  }

  // Per ottenere i dati di spedizione dal file shipping.json, usiamo il metodo get() di HttpClient
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  // clearCart: metodo che restituisce un array vuoto di articoli e quindi svuota il carrrello
  clearCart() {
    this.items = [];
    return this.items;
  }
}
