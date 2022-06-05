import { PostarComponent } from './postar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostarRoutingModule } from './postar-routing.module';

@NgModule({
  declarations: [ PostarComponent ],
  imports: [ CommonModule, PostarRoutingModule ]
})
export class PostarModule { }
