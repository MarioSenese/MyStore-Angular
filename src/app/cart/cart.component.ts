import { Component } from '@angular/core';
// Importiamo CartService da cart.service.ts
import { CartService } from '../cart.service';
// Importazione del pacchetto FormBuilder, un servizio che fornisce metodi pratici per la generazione di controlli
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Definiamo la proprietà items per memorizzare i prodotti nel carrello
  items = this.cartService.getItems();

  /**
   * Per raccogliere nome&indirizzo dell'utente, usiamo il metodo group() di FormBuilder; questo per impostare la proprietà checkoutForm su un modello di modulo contenente i campi nome&indirizzo
   */
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  /**
   * Per elaborare il modulo, definiamo il metodo onSubmit(). Metodo che consente agli utenti di inviare il proprio nome&indirizzo ed utilizza il metodo clearCart(), di CartService, per resettare il modulo e cancellare il carrello
   */
  onSubmit(): void {
    console.log('ciao');
    this.items = this.cartService.clearCart();
    console.warn('You order has been submitted', this.checkoutForm.value);
    window.alert('You order has been submitted');
    this.checkoutForm.reset();
  }

  /**
   * Iniettiamo nel costruttore il CartService in modo che il componente CartComponent possa usarlo.
   *
   * Iniettiamo nel costruttore il FormBuilder
   */
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder // servizio che fa parte del modulo ReactiveFormsModule
  ) {}
}
