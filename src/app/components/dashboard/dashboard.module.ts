import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HistorialComponent } from './historial/historial.component';
import { ConfiguracionConsultasComponent } from './configuracion/configuracion-consultas/configuracion-consultas.component';


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    UsuarioComponent,
    ConfiguracionComponent,
    ResultadoComponent,
    HistorialComponent,
    ConfiguracionConsultasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
