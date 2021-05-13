import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogListPage } from './blog-list/blog-list.page';
import { BlogsRoutingModule } from './blogs-routing.module';


@NgModule({
  declarations: [
      BlogListPage
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
})
export class BlogsModule { }
