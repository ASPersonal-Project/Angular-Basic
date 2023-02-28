import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angIntro';
  parentMessage = 'pass data from input decorator'
  childMessageFormPost = ''
  outputChildMessage = ''

  @ViewChild(PostComponent) childComp!:PostComponent;

  ngAfterViewInit(){
    this.childMessageFormPost = this.childComp.childMessage
  }

  receivedMessage(evnet:string){
    this.outputChildMessage = evnet
  }
}
