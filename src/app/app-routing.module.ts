import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../views/login/login.module').then((m) => m.LoginModule),
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('../views/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../views/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'my-profile',
        loadChildren: () =>
          import('../views/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
