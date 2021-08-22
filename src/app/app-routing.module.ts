import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../components/login/login.module').then((m) => m.LoginModule),
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('../components/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../components/forgot-password/forgot-password.module').then(
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
          import('../components/my-profile/my-profile.module').then(
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
