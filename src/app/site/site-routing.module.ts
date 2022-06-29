import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./paginas/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'postar',
        loadChildren: () =>
          import('./paginas/postar/postar.module').then((m) => m.PostarModule),
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./paginas/faqs/faqs.module').then((m) => m.FaqsModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./paginas/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'sobre',
        loadChildren: () =>
          import('./paginas/sobre/sobre.module').then((m) => m.SobreModule),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('./paginas/cadastro/cadastro.module').then((m) => m.CadastroModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule { }
