import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListPage } from './blog-list/blog-list.page';

const routes: Routes = [
  {
    path: '',
    component: BlogListPage,
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
