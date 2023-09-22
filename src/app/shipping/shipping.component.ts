import { Component, OnInit } from '@angular/core';
// Per recuperare i dati di spedizione via HTTP dal file shipping.json, importiamo il servizio CartService
import { CartService } from '../cart.service';
import { Observable } from 'rxjs'; // Observable (Osservato), oggetti prelevati dalla libreria RxJS, ci consentono di gestire i dati prelevati da un database, o altra fonte esterna, in maniera asincrona

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // Definiamo la proprietà shippingCost
  shippingCosts!: Observable<{ type: string; price: number }[]>;
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  // iniettiamo il servizio CartServizio nel costruttore del componente
  constructor(private cartService: CartService) {}
}
