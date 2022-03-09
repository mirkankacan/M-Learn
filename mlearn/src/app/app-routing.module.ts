import { NgModule } from '@angular/core';
import {  PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {redirectLoggedInTo,redirectUnauthorizedTo,canActivate} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);
// const redirectLoggedInToHome=()=>redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    // Bir kere login olunca otomatik giriş yapması için
    // ...canActivate(redirectLoggedInToHome) 
    
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
      ...canActivate(redirectUnauthorizedToLogin)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
 
  {
    path: 'ida',
    loadChildren: () => import('./ida/ida.module').then( m => m.IdaPageModule)
  },
   {
    path: 'kinabalu',
    loadChildren: () => import('./kinabalu/kinabalu.module').then( m => m.KinabaluPageModule)
  },
  {
    path: 'kunlun',
    loadChildren: () => import('./kunlun/kunlun.module').then( m => m.KunlunPageModule)
  },
  {
    path: 'vinson',
    loadChildren: () => import('./vinson/vinson.module').then( m => m.VinsonPageModule)
  },
  {
    path: 'toubkal',
    loadChildren: () => import('./toubkal/toubkal.module').then( m => m.ToubkalPageModule)
  },
  {
    path: 'fuji',
    loadChildren: () => import('./fuji/fuji.module').then( m => m.FujiPageModule)
  },
  {
    path: 'citlaltepetl',
    loadChildren: () => import('./citlaltepetl/citlaltepetl.module').then( m => m.CitlaltepetlPageModule)
  },
  {
    path: 'bigben',
    loadChildren: () => import('./bigben/bigben.module').then( m => m.BigbenPageModule)
  },

    {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
