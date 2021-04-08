import {Component, OnInit} from '@angular/core';
import {Note, NotesManagerService} from "../services/notes-manager.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  constructor(private notesManagerService: NotesManagerService) {
  }

  ngOnInit(): void {
  }

  selectedNote(): Note {
    return this.notesManagerService.selectedNote;
  }

  reset() {
    return this.notesManagerService.reset();
  }

  createOrUpdateNote(myForm: NgForm) {
     return this.notesManagerService.createOrUpdate(myForm);
  }
}
