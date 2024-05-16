import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './data/post.services';
import { PostListComponent } from './post-list/post-list-component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), 

    HttpClientModule,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


