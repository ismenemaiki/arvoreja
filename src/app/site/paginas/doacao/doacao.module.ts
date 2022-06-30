import { DoacaoRoutingModule } from './doacao-routing.module';
import { DoacaoComponent } from './doacao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ DoacaoComponent ],
  imports: [ CommonModule, DoacaoRoutingModule, ReactiveFormsModule ]
})
export class DoacaoModule { }
