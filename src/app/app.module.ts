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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoteComponent,
    NoteEditorComponent,
    NotesHeadComponent
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
