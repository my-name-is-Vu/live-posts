import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPost: Post[] = [
    // new Post(
    //   'Nature',
    //   'Nature is a British weekly scientific founded and based in London, England. As a Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    //   'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80',
    //   'test@test.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Hampi',
    //   'Hampi is a British weekly scientific founded and based in London, England. As a Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    //   'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    //   'test@test.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'Araku Valley',
    //   'Araku Valley is a British weekly scientific founded and based in London, England. As a Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    //   'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    //   'test@test.com',
    //   new Date(),
    //   4
    // ),
  ];

  // Facility
  getPosts() {
    return this.listOfPost;
  }

  // Facility 2
  deletePost(index: number) {
    return this.listOfPost.splice(index, 1);
  }

  //  Facility 3
  addPost(post: Post) {
    this.listOfPost.push(post);
  }

  // Facility 4
  updatePost(index: number, post: Post) {
    this.listOfPost[index] = post;
  }

  // facility 5
  getPost(index: number) {
    return this.listOfPost[index];
  }

  // facility 6
  likePost(index: number) {
    this.listOfPost[index].numberOfLikes += 1;
  }

  // facility 7
  setPosts(listOfPost: Post[]) {
    this.listOfPost = listOfPost;
    this.listChangedEvent.emit(listOfPost);
  }
}
