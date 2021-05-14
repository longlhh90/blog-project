import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogDetailPage } from './blog-detail/blog-detail.page';
import { BlogListPage } from './blog-list/blog-list.page';
import { BlogsRoutingModule } from './blogs-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
      BlogListPage,
      BlogDetailPage,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  providers: [],
})
export class BlogsModule { }
