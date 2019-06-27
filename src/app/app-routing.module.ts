import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarSesionComponent } from './components/users/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/users/registro/registro.component';


const routes: Routes = [
  {path: 'inicio', component: IniciarSesionComponent},
  {path: '', component: InicioComponent},
  {path: 'registro', component: RegistroComponent}

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
