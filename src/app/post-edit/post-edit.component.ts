import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        // console.log(params['index']);

        this.index = params['index'];

        //  Get post corresponding(tương ứng) with index of post
        const post = this.postService.getPost(this.index);

        //add fields corresponding to FormControl, edit post holding user's information
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        // edit = true or true to display post edit
        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  // validate form
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    // Ready with Object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'test@gmail.com',
      new Date(),
      0
    );

    // Calling service to enter new posts and update post edited
    if (this.editMode) {
      this.postService.updatePost(this.index, post);
    } else {
      this.postService.addPost(post);
    }

    // Navigate to /post-list
    this.router.navigate(['/post-list']);
  }
}
