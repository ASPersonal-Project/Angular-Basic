import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  childMessage: string = 'from child to parent message'
  outputChildMessage: string = 'from output child message'
  imageUrl = 'https://popupsmart.com/encyclopedia/images/u/r/l/-/i/url-image-7a74f0de.png'
  bool: boolean = true
  testMessage: string='default value'
  useremail: any;

  @Input() fromParent: string = '';

  @Output() messageEvent = new EventEmitter<string>()

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
}
