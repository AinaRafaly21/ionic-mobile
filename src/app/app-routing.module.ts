import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'achat-offre',
    loadChildren: () => import('./achat-offre/achat-offre.module').then( m => m.AchatOffrePageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'compte/:id',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'offre-details/:id',
    loadChildren: () => import('./offre-details/offre-details.module').then( m => m.OffreDetailsPageModule)
  },
  {
    path: 'credit',
    loadChildren: () => import('./credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: 'simulation',
    loadChildren: () => import('./simulation/simulation.module').then( m => m.SimulationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
