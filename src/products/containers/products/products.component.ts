import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';
import { MetadataService } from '../../../app/services/metadata/metadata.service';

@Component({
  selector: 'products',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzasService, private metadataService: MetadataService) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });

    this.metadataService.updateMeta({
      title: 'Pizzas',
      description: 'List of all pizza',
      longDescription: ''
    });
  }
}
