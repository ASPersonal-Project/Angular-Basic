import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { FormsComponent } from './forms/forms.component';
import { FormBuildComponent } from './form-build/form-build.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostItemComponent,
    FormsComponent,
    FormBuildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
