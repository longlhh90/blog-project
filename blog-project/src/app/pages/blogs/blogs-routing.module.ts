import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPage } from './blog/blog-detail/blog-detail.page';
import { BlogListPage } from './blog-list/blog-list.page';
import { BlogEditComponent } from './blog/edit-blog/blog-edit.page';

const routes: Routes = [
    {
        path: '',
        component: BlogListPage,
        pathMatch: 'full',
    },
    {
        path: 'new',
        component: BlogEditComponent,
    },
    {
        path: ':id',
        component: BlogDetailPage,
    },
    {
        path: ':id/edit',
        component: BlogEditComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogsRoutingModule { }
