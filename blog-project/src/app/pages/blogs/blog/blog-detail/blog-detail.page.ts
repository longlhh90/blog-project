import { Component } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Blog, BLOG_SAMPLE } from '../../../../data/blog.interface';

@Component({
  templateUrl: 'blog-detail.page.html',
  styleUrls: ['blog-detail.page.scss']
})
export class BlogDetailPage {
    blogID$ : Observable<string>;
    blog: Blog;
    isAdmin = false;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
    ) {}

    ngOnInit() {
       this.blogID$ = this.route.paramMap.pipe(
        filter(params => params.has('id')),
        map(params => params.get('id'))
      )
      // this.route.pathFromRoot.some(r => r.url.subscribe( value => value === "admin"))
      // for (const i of this.route.pathFromRoot) {
      //   i.url.subscribe(v => console.log(v))
      // }

      this.isAdmin = this.router.url.indexOf('/admin') === 0
        
      this.blog = BLOG_SAMPLE;
    }
}
