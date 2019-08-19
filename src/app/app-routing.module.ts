import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  // {
  //   path: 'posts',
  //   loadChildren: './features/posts/posts.module#PostsModule'
  // },
  // {
  //   path: 'authors',
  //   loadChildren: './features/authors/authors.module#AuthorsModule'
  // },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
