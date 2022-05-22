import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { FaqsRoutingModule } from './faqs-routing.module';

@NgModule({
  declarations: [ FaqsComponent ],
  imports: [ CommonModule, FaqsRoutingModule ]
})
export class FaqsModule { }
