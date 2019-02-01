import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewpostComponent } from './newpost/newpost.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'New', component: NewpostComponent},
  {path: 'Posts', component: PostlistComponent},
  {path: '', redirectTo: 'Posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'Posts'}
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
