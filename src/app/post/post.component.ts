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

  @Input() fromParent: string = '';

  @Output() messageEvent = new EventEmitter<string>()

  passMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }
}
