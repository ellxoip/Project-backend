import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.scss'],
})
export class DetalleProdComponent implements OnInit {
  @Output()
  tiend = new EventEmitter<any>();

  @Input()
  public p! : Producto;
  public formuly? : any;



  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public builder : FormBuilder
  ) { }

  public movement(){
    const bye = {
      id : this.p?.id,
      quantity : this.formuly.value.cantidad
    }
    this.tiend.emit(bye);
  }

  ngOnInit() {
      this.formuly = this.builder.group({
      cantidad : new FormControl(0,
        [Validators.required,
        Validators.min(1),
        Validators.max(this.p.stock)])
      });


    }

  }
