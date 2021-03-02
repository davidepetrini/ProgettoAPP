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
    path: 'dettaglio-categoria',
    loadChildren: './pages/dettaglio-categoria/dettaglio-categoria.module#DettaglioCategoriaPageModule',
  },
  {
    path: 'movimenti',
    loadChildren: './pages/movimenti/movimenti.module#MovimentiPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'registrazione',
    loadChildren: './pages/registrazione/registrazione.module#RegistrazionePageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
