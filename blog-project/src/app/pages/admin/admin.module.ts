import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminHomeComponent } from './admin-home/admin-home.page';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [
      AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  providers: [],
})
export class AdminModule { }
