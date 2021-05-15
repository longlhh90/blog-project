import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.page';

const routes: Routes = [
    {
        path: '',
        component: AdminHomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'blogs',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
