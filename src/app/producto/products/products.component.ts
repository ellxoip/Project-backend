import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @Input()
  public prods? : Producto[];

  @Output()
  public irADetalles = new EventEmitter<number>();

  @Output()
  public countits = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public detalles(id : number): void{
    this.irADetalles.emit(id);
  }

  onIonInfinite(ev : any) {
    this.countits.emit();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
