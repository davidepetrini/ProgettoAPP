import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'categorie',
    loadChildren: './pages/categorie/categorie.module#CategoriePageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
      canActivateChild: [AuthGuard]
  },
  {
    path: 'movimento',
    loadChildren: './pages/movimento/movimento.module#MovimentoPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'impostazioni',
    loadChildren: './pages/impostazioni/impostazioni.module#ImpostazioniPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'info',
    loadChildren: './pages/info/info.module#InfoPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'profilo',
    loadChildren: './pages/profilo/profilo.module#ProfiloPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'notizie',
    loadChildren: './pages/notizie/notizie.module#NotiziePageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'dummy',
    loadChildren: './pages/dummy/dummy.module#DummyPageModule', 
  },
  {
    path: 'dummy-tab',
    loadChildren: './pages/dummy-tab/dummy-tab.module#DummyTabPageModule',
  },
  {
    path: 'dettaglio-categoria',
    loadChildren: './pages/dettaglio-categoria/dettaglio-categoria.module#DettaglioCategoriaPageModule',
  },
  {
    path: 'edit-categoria',
    loadChildren: './pages/edit-categoria/edit-categoria.module#EditCategoriaPageModule',
  },
  {
    path: 'movimenti',
    loadChildren: './pages/movimenti/movimenti.module#MovimentiPageModule',
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
