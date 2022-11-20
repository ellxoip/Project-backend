import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrito, ProdCarrito } from './modelo/carrito';
import { Producto } from './modelo/producto';
import { AñadirService } from './servicio/añadir.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  //Atributos
  public modo? : number;
  public productos? : Producto[];
  public producto! : Producto;
  public carrito! : Carrito;
  public full! : ProdCarrito;
  public section! : number;
  public token?: string = '';
  public usrId?: string = '';
  public nombreModo? : string;
  // Constructor con servicio y activador de rutas
  constructor(
    private datos : AñadirService,
    private ruta : ActivatedRoute

  ) { }


  public detalles(id : number) : void{
    this.datos.detalles(this.token, id).subscribe(data => {
      this.producto = {...data}
    });
    this.modo = 3;
    this.nombreModo = 'Detalle-prod';
  }
  public cambiaModo(nuevo : number) : void{

    if(nuevo == 1){
      this.nombreModo = 'Products';
    }
    else{

        if(nuevo == 2){
          this.nombreModo = 'Carrito';
          this.datos.añadirCarrito(this.usrId).subscribe(data => {
            this.full = {...data}
          });
        }
    }
    this.modo = nuevo;
  }

  public sumar() : void{
    this.section = this.section + 30;
    this.datos.iniciar(this.token, this.section).subscribe(data => {
      for(let x of data.products){
        this.productos?.push(x);
      }
    });
  }

  ngOnInit() {
    this.token = this.ruta.snapshot.params['token'];
    this.usrId = this.ruta.snapshot.params["usrId"];
    this.section = 0;
    console.log(this.token);
    this.datos.iniciar(this.token,
      this.section ).subscribe(data => {
      this.productos = data.products;
    });
    this.modo = 1;
    this.nombreModo =  'Products';
  }

  public shoping(dommy : any) : void{
    const dommy2 = {
      userId : this.usrId,
      products : [
        {...dommy}
      ]
    }
    this.datos.añadirCarrito(dommy2).subscribe(data => {
      this.carrito = {...data};
    });
    this.modo = 1;
    this.nombreModo = 'Products';
  }

}
