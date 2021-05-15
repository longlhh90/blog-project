import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface BlogData {
  id?: number,
  title: string
  imgUrl: string
  content: string
}

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

    blog : BlogData = {
      title: 'New Blog about Shiba Inu',
      imgUrl: 'https://placedog.net/1000/1000?random',
      content: `The Shiba Inu  is the smallest of the six original and distinct spitz breeds
      of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.`
    }

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
      console.log(form_value)
    }
}
