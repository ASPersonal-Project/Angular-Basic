import { AfterViewInit, Component,EventEmitter,Input, Output, ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit{

  childMessage: string = 'from child to parent message'
  outputChildMessage: string = 'from output child message'
  imageUrl = 'https://popupsmart.com/encyclopedia/images/u/r/l/-/i/url-image-7a74f0de.png'
  bool: boolean = true
  testMessage: string='default value'
  useremail: any;
  childMsg: string = ''
  newOutputMsg: string = ''

  @Input() fromParent: string = '';

  @Output() messageEvent = new EventEmitter<string>()

  @ViewChild(PostListComponent) PostListCom! : PostListComponent


  ngAfterViewInit(){
   this.childMsg = this.PostListCom.childNewMessage
  }

  passMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }

  clickButton(){
    this.testMessage = "clickbutton"
  }

  typeMessage(username:string){
    this.testMessage=username
  }

  typeUserEmail(){
    console.log('xxxxxxxxxxx',this.useremail)
  }

  recivedNewMsg(msg:any){
    this.newOutputMsg = msg
  }
}
