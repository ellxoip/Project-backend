import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { AñadirService } from './servicio/añadir.service';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProdComponent } from './detalle-prod/detalle-prod.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ProductoPage,
    ProductsComponent,
    DetalleProdComponent,
    CarritoComponent
  ],

  providers:[AñadirService]
})
export class ProductoPageModule {}
