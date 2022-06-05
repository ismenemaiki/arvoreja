
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    SiteComponent,
    MenuComponent,
    MenuLateralComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule
  ],
})
export class SiteModule { }
