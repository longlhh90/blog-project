import { Component } from '@angular/core';

@Component({
  templateUrl: 'blog-list.page.html',
  styleUrls: ['blog-list.page.scss']
})
export class BlogListPage {
    blogs = [1,2,3,4,5];

    ngOnInit() {

    }
}
