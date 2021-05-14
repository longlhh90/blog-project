import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPage } from './blog-detail/blog-detail.page';
import { BlogListPage } from './blog-list/blog-list.page';

const routes: Routes = [
  {
    path: '',
    component: BlogListPage,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: BlogDetailPage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
