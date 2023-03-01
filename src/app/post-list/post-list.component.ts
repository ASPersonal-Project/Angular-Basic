import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  bool = true
  inputvalue = ''
  eventvalue = ''
  @Input() postname: string = '';
  imageUrl = 'https://popupsmart.com/encyclopedia/images/u/r/l/-/i/url-image-7a74f0de.png'

  childNewMessage: string = 'from child'

  @Output()  msgEvent = new EventEmitter<string>()

  emitMsg(){
    this.msgEvent.emit('childEmitmsg')
  }

  getInputValue(){
    this.inputvalue = this.eventvalue
  }
}
