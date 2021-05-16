import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogDetailPage } from './blog/blog-detail/blog-detail.page';
import { BlogListPage } from './blog-list/blog-list.page';
import { BlogsRoutingModule } from './blogs-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BlogEditComponent } from './blog/edit-blog/blog-edit.page';
import { BlogFormComponent } from './blog/edit-blog/blog-form/blog-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
      BlogListPage,
      BlogDetailPage,
      BlogEditComponent,
      BlogFormComponent,
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
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
})
export class BlogsModule { }
