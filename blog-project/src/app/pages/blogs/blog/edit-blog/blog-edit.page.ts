import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  template: `
    <div class="page-content-card-col">
        <div style="width: 70%;">
            <div class="blog-container">
                <mat-card>
                    <blog-form [isEdit]="isEdit"></blog-form>
                </mat-card>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .blog-container {
        width: 100%;
        margin: 16px;
    }
  `]
})
export class BlogEditComponent {
    isEdit = false;
    destroy$ = new Subject();
    word: string;

    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
            this.isEdit = params.has("id")
        })
        this.word = this.isEdit ? "edit a blog" : "create new blog"
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
