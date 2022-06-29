import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [ CadastroComponent ],
  imports: [ CommonModule, CadastroRoutingModule, ReactiveFormsModule ]
})
export class CadastroModule { }
