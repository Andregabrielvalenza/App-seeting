import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-form-basics',
    loadChildren: () => import('./register-form-basics/register-form-basics.module').then( m => m.RegisterFormBasicsPageModule)
  },
  {
    path: 'register-form-interests',
    loadChildren: () => import('./register-form-interests/register-form-interests.module').then( m => m.RegisterFormInterestsPageModule)
  },
  {
    path: 'register-form-location',
    loadChildren: () => import('./register-form-location/register-form-location.module').then( m => m.RegisterFormLocationPageModule)
  },
  {
    path: 'register-form-yourself',
    loadChildren: () => import('./register-form-yourself/register-form-yourself.module').then( m => m.RegisterFormYourselfPageModule)
  },
  {
    path: 'register-form-languages',
    loadChildren: () => import('./register-form-languages/register-form-languages.module').then( m => m.RegisterFormLanguagesPageModule)
  },
  {
    path: 'register-form-appearance',
    loadChildren: () => import('./register-form-appearance/register-form-appearance.module').then( m => m.RegisterFormAppearancePageModule)
  },
  {
    path: 'register-form-validate-user',
    loadChildren: () => import('./register-form-validate-user/register-form-validate-user.module').then( m => m.RegisterFormValidateUserPageModule)
  },
  {
    path: 'register-form-photo-validation',
    loadChildren: () => import('./register-form-photo-validation/register-form-photo-validation.module').then( m => m.RegisterFormPhotoValidationPageModule)
  },
  {
    path: 'register-form-photo-confirmation',
    loadChildren: () => import('./register-form-photo-confirmation/register-form-photo-confirmation.module').then( m => m.RegisterFormPhotoConfirmationPageModule)
  },
  {
    path: 'register-form-validate-user-verified',
    loadChildren: () => import('./register-form-validate-user-verified/register-form-validate-user-verified.module').then( m => m.RegisterFormValidateUserVerifiedPageModule)
  },
  {
    path: 'register-form-welcome',
    loadChildren: () => import('./register-form-welcome/register-form-welcome.module').then( m => m.RegisterFormWelcomePageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'crear-contrasena',
    loadChildren: () => import('./crear-contrasena/crear-contrasena.module').then( m => m.CrearContrasenaPageModule)
  },
  {
    path: 'buy-single-credits',
    loadChildren: () => import('./buy-single-credits/buy-single-credits.module').then( m => m.BuySingleCreditsPageModule)
  },
  {
    path: 'planes-femaie',
    loadChildren: () => import('./planes-femaie/planes-femaie.module').then( m => m.PlanesFemaiePageModule)
  },
  {
    path: 'planes-male',
    loadChildren: () => import('./planes-male/planes-male.module').then( m => m.PlanesMalePageModule)
  },
  {
    path: 'purchase-confirmation',
    loadChildren: () => import('./purchase-confirmation/purchase-confirmation.module').then( m => m.PurchaseConfirmationPageModule)
  },
  {
    path: 'inbox-report-user',
    loadChildren: () => import('./inbox-report-user/inbox-report-user.module').then( m => m.InboxReportUserPageModule)
  },
  {
    path: 'inbox-message',
    loadChildren: () => import('./inbox-message/inbox-message.module').then( m => m.InboxMessagePageModule)
  },
  {
    path: 'register-form-appearance-dos',
    loadChildren: () => import('./register-form-appearance-dos/register-form-appearance-dos.module').then( m => m.RegisterFormAppearanceDosPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'action-menu',
    loadChildren: () => import('./action-menu/action-menu.module').then( m => m.ActionMenuPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'planes-go-photofeed',
    loadChildren: () => import('./planes-go-photofeed/planes-go-photofeed.module').then( m => m.PlanesGoPhotofeedPageModule)
  },
  {
    path: 'purchase-confirmation-uno',
    loadChildren: () => import('./purchase-confirmation-uno/purchase-confirmation-uno.module').then( m => m.PurchaseConfirmationUnoPageModule)
  },
  {
    path: 'terms-of-use',
    loadChildren: () => import('./terms-of-use/terms-of-use.module').then( m => m.TermsOfUsePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },  {
    path: 'new-login',
    loadChildren: () => import('./new-login/new-login.module').then( m => m.NewLoginPageModule)
  },
  {
    path: 'new-resgitro',
    loadChildren: () => import('./new-resgitro/new-resgitro.module').then( m => m.NewResgitroPageModule)
  },
  {
    path: 'new-ubicacion',
    loadChildren: () => import('./new-ubicacion/new-ubicacion.module').then( m => m.NewUbicacionPageModule)
  },
  {
    path: 'new-ubicacion-uno',
    loadChildren: () => import('./new-ubicacion-uno/new-ubicacion-uno.module').then( m => m.NewUbicacionUnoPageModule)
  },
  {
    path: 'new-preguntdas-registro',
    loadChildren: () => import('./new-preguntdas-registro/new-preguntdas-registro.module').then( m => m.NewPreguntdasRegistroPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'permiso-ubicacion',
    loadChildren: () => import('./permiso-ubicacion/permiso-ubicacion.module').then( m => m.PermisoUbicacionPageModule)
  },
  {
    path: 'inbox-message-uno',
    loadChildren: () => import('./inbox-message-uno/inbox-message-uno.module').then( m => m.InboxMessageUnoPageModule)
  },
  {
    path: 'inbox-message-dos',
    loadChildren: () => import('./inbox-message-dos/inbox-message-dos.module').then( m => m.InboxMessageDosPageModule)
  },
  {
    path: 'permiso-foto',
    loadChildren: () => import('./permiso-foto/permiso-foto.module').then( m => m.PermisoFotoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
