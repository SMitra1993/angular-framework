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
      {
        path: 'counter',
        loadChildren: () =>
          import('../components/counter/counter.module').then(
            (m) => m.CounterModule
          ),
      },
      {
        path: 'post',
        loadChildren: () =>
          import('../views/posts/home/post.module').then(
            (m) => m.PostModule
          ),
      },
      {
        path: 'post/add',
        loadChildren: () =>
          import('../views/posts/add/add-post.module').then(
            (m) => m.AddPostModule
          ),
      },
      {
        path: 'post/edit/:id',
        loadChildren: () =>
          import('../views/posts/edit/edit-post.module').then(
            (m) => m.EditPostModule
          ),
      }
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
