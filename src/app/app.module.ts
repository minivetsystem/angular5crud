import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PostAddComponent} from './posts/post-add/post-add.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostsService} from './service/posts.service';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostListComponent,
    PostEditComponent
  ],
  imports: [
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
