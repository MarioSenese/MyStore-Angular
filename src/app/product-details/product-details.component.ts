import { Component, OnInit } from '@angular/core';
// Importiamo "ActivatedRoute" da @angular/route
import { ActivatedRoute } from '@angular/router';
// Importiamo "CartService" dal file cart.service.ts
import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // Definiamo la proprietà product
  product: Product | undefined;

  /**
   * La dichiarazione "implements OnInit" indica che la classe implementa l'interfaccia OnInit, richiedendo l'implementazione del metodo ngOnInit per le attività di inizializzazione alla creazione del componente
   */
  ngOnInit(): void {
    /**
     * Estrazione del productId dai parametri del route e sucessivamente trovare il prodotto quell'id nell'array dei prodotti.
     *
     * Per accedere ai parametri del route, dobbiamo usare "route.snapshot" ovvero l'ActivatedRouteSnapshot che contiene le informazioni sul route attivo in quel momento.
     */

    // Otteniamo per prima cosa l'id del prodotto dal percorso corrente
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Troviamo il prodotto con l'id fornito nel percorso, nell'array
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  /**
   * ActivatedRoute è specifico per ogni componente che Angular Router carica. Esso contiene informazioni sul route e sui suoi parametri. Iniettando ActivatedRoute, si configura il componente per utilizzare un servizio.
   *
   * Iniezione del servizio carrello: CartService
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /**
   *  Definizione del metodo di aggiunta del prodotto al carrello.
   *  Il metodo prende come argomento il prodotto corrento, utilizza il metodo addToCart() di CartService per aggiungere il prodotto al carrello e, infine, visualizza un messaggio che indica che è stato aggiunto un prodotto al carrello
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
