import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Carrito, ProdCarrito } from '../modelo/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  @Output()
  tiend = new EventEmitter<any>();

  @Input()
  public p! : ProdCarrito;
  public formuly? : any;



  constructor(
    public builder : FormBuilder
  ) { }

  public carrier(){
    const bye = {
      id : this.p?.carts,
      quantity : this.formuly.value.cantidad
    }
    this.tiend.emit(bye);
  }

  ngOnInit() {
      this.formuly = this.builder.group({
      cantidad : new FormControl(0,
        [Validators.required,
        Validators.min(1)])
      });


    }
  }

