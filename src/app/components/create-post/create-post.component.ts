import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public description: string;
  public privacity: string;
  public items = [];
  public defaultPrivacity: any;

  constructor(
    public _registerSrv: RegisterService,
  ) { }

  ngOnInit() {
    this.items = ['Público', 'Privado'];
    this.privacity = 'Público';
  }

  createPost() {
    this._registerSrv
      .writePostData(this.description, this.privacity)
      .then(() => {
        console.log('ya');
      });
  }

}
