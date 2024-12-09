import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'rol',
    loadChildren: () => import('./rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },   {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rol-registrar',
    loadChildren: () => import('./rol-registrar/rol-registrar.module').then( m => m.RolRegistrarPageModule)
  },
  {
    path: 'perfilregistro',
    loadChildren: () => import('./perfilregistro/perfilregistro.module').then( m => m.PerfilregistroPageModule)
  },
  {
    path: 'actuaperfil',
    loadChildren: () => import('./actuaperfil/actuaperfil.module').then( m => m.ActuaperfilPageModule)
  },
  {
    path: 'actuarol',
    loadChildren: () => import('./actuarol/actuarol.module').then( m => m.ActuarolPageModule)
  },
  {
    path: 'actuausuario',
    loadChildren: () => import('./actuausuario/actuausuario.module').then( m => m.ActuausuarioPageModule)
  },
  
  { path: 'actuausuario/:id', // Aquí debe coincidir el nombre del parámetro
    loadChildren: () =>
      import('./actuausuario/actuausuario.module').then(
        (m) => m.ActuausuarioPageModule
      ), },
  
];


  


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
