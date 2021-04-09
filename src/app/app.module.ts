import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from "@angular/forms";
import { NoteComponent } from './note/note.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import {NotesManagerService} from "./services/notes-manager.service";
import { NotesHeadComponent } from './notes-head/notes-head.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoteComponent,
    NoteEditorComponent,
    NotesHeadComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
