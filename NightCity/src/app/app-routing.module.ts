import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
