import { Component } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  // postTitle = '';
  // postDetails = '';
  // imageUrl = '';
  // postUrl = '';
  // isBackground= false;
  name='';
  email='';
  address='';
  userDataArray: Array<any> = [];

  saveUserDetails(){
    const userObject = {name:this.name, email:this.email, address:this.address}
    this.userDataArray.push(userObject)
    this.name='',
    this.email='',
    this.address=''
  }

  deleteUser(index:number){
    this.userDataArray.splice(index,1)
  }
}
