import { Component } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'blog-detail.page.html',
  styleUrls: ['blog-detail.page.scss']
})
export class BlogDetailPage {
    blogs = [1,2,3,4,5];
    blogID$ : Observable<string>

    constructor(
      private route: ActivatedRoute,
      private router: Router,
    ) {}

    ngOnInit() {
       this.blogID$ = this.route.paramMap.pipe(
        filter(params => params.has('id')),
        map(params => params.get('id'))
      )
    }
}
