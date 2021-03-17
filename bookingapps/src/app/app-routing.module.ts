import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'singup',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'futsal',
    loadChildren: () => import('./futsal/futsal.module').then( m => m.FutsalPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'squere',
    loadChildren: () => import('./squere/squere.module').then( m => m.SquerePageModule)
  },
  {
    path: 'bola',
    loadChildren: () => import('./bola/bola.module').then( m => m.BolaPageModule)
  },
  {
    path: 'enquirym',
    loadChildren: () => import('./enquirym/enquirym.module').then( m => m.EnquirymPageModule)
  },
  {
    path: 'managebooking',
    loadChildren: () => import('./managebooking/managebooking.module').then( m => m.ManagebookingPageModule)
  },
  {
    path: 'editbooking/:id',
    loadChildren: () => import('./editbooking/editbooking.module').then( m => m.EditbookingPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'termncond',
    loadChildren: () => import('./termncond/termncond.module').then( m => m.TermncondPageModule)
  },
  {
    path: 'admineditbooking/:id',
    loadChildren: () => import('./admineditbooking/admineditbooking.module').then( m => m.AdmineditbookingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
