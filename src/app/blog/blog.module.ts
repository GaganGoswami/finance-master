import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogAdminService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent],
  providers: [BlogAdminService]
})
export class BlogModule { }
