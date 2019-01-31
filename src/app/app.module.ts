import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { FormsModule } from '@angular/forms';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewpostComponent } from './newpost/newpost.component';
import { Routes } from '@angular/router';
import { PostsService } from './services/posts.service';


const appRoutes: Routes = [
  {path: 'New', component: NewpostComponent},
  {path: 'Posts', component: PostlistComponent},
  {path: '', redirectTo: 'Posts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
