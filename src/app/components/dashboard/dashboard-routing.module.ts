import { ConfiguracionConsultasComponent } from './configuracion/configuracion-consultas/configuracion-consultas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
{path: 'inicio', component: InicioComponent},
{path: 'usuario', component:UsuarioComponent },
{path: 'configuracion', component: ConfiguracionComponent},
{path: 'resultado', component: ResultadoComponent},
{path: 'ayuda', component: AyudaComponent},
{path: 'configuracion-consultas', component: ConfiguracionConsultasComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
