import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path:'crearProducto', component:ProductoComponent},
  {path:'detalleProducto/:id', component:ProductoComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
