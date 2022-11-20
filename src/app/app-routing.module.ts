import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./autenticate/autenticate/autenticate.module').then( m => m.AutenticatePageModule)
  },
  {
    path: 'producto/:usrid/:token',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
