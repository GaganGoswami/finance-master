import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAdminService } from './blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    imgTitle: string;
    imageSRC: string;
    postTitle: string;
    content: string;
    post: Blog;

    constructor( private blogAdminSVC: BlogAdminService, private router: Router  ){}

  ngOnInit() {
  }
    fileLoad($event: any) {
        let myReader:FileReader = new FileReader();
        let file:File = $event.target.files[0];
        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imageSRC = e.target.result;
        }

    }

    createPost(){
        this.post = new Blog (
            this.postTitle,
            this.content,
            this.imgTitle
            // ,
            // this.imageSRC.substring(23)
        );
        this.blogAdminSVC.createPost(this.post);
        alert(`${this.postTitle} added to posts`);
        this.router.navigate(['/admin']);
    }

    cancel(){
        this.router.navigate(['/admin']);
    }

}
