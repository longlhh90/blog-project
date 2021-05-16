import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BLOG_SAMPLE } from '../../../../../data/blog.interface';


@Component({
  selector: 'blog-form',
  templateUrl: 'blog-form.component.html',
  styleUrls: ['blog-form.component.scss']
})
export class BlogFormComponent {
    @Input() isEdit: boolean;
    @Input() blogID: number
    form: FormGroup;
    content: string = "";

    blog = BLOG_SAMPLE

    ngOnInit() {
      if (this.isEdit) {
        this.form.patchValue({
          title: this.blog.title,
          imgUrl: this.blog.imgUrl,
          content: this.blog.content,
        })
      }
    }

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        title: ['', Validators.required],
        imgUrl: ['', Validators.required],
        content: ['', [Validators.email, Validators.required]],
      })
    }

    onSubmit(form_value) {
      console.log(form_value);
      this.blog.content = form_value.content;
    }
}
