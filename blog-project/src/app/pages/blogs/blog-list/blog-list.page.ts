import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'blog-list.page.html',
  styleUrls: ['blog-list.page.scss']
})
export class BlogListPage {
    blogs = [1,2,3,4,5];
    isAdmin = false;

    ngOnInit() {
        this.isAdmin = this.router.url.indexOf("/admin") === 0
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    goToDetail(id: number) {
        console.log(id);
        this.router.navigate([id], { relativeTo: this.route });
    }
}
