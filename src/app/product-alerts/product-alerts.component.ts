/**
 * Per impostare ProductAlertsComponent in modo che riceva i dati dei prodotti,
 * importiamo "Input" da "@angular/core".
 * Per far funzione l'evento Notify Me, importiamo "Output" e "EventMitter" di
 * @angular/core
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', // identifica il componente. Nota che i selettori iniziano sempre con il prefisso "app-" seguito poi dal nome del componente
  templateUrl: './product-alerts.component.html', // modello
  styleUrls: ['./product-alerts.component.css'], // stile
})

// Esporta la classe del componente che gestisce le funzionalità appunto del componente "@Component ProductAlertsComponent"
export class ProductAlertsComponent {
  /**
   * Definiamo una proprietà denominata product con @Input. Quest'ultimo indica che il valore della proprietà passa dal genitore del componente ProductListComponent
   */
  @Input() product: Product | undefined;

  /**
   * Definiamo una proprietà denominata "notify" con decoratore @Output e una istanza di EventMitter. La configurazione di ProductAlertsComponent con un decoratore @Output() consente al componente di emettere un evento quando il valore della proprietà notify cambia. Nel modello html del componente in questione dobbiamo invece aggiornare il bottone con un evento che chiama il metodo "notify.emit()"
   */
  @Output() notify = new EventEmitter();
}

/**
 * Nel frattempo, il generatore ha aggiunto automaticamente il ProductAlertsComponent all'AppModule per renderlo disponibile agli altri componenti dell'applicazione (vedi file app.module.ts).
 *
 * Per aggiungere, visualizzare tale componente al componente padre "ProductListComponent", dobbiamo aggiungere il selettore (selector) figlio (app-product-alerts) nel modello (html) del componente padre (product-list-component.html). Passare inoltre il prodotto corrente come input al componente, utilizzando il binding delle proprietà.
 */
