import {Component, OnInit} from '@angular/core';
import {Note, NotesManagerService} from "../services/notes-manager.service";

@Component({
  selector: 'app-notes-head',
  templateUrl: './notes-head.component.html',
  styleUrls: ['./notes-head.component.css']
})
export class NotesHeadComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesManagerService: NotesManagerService) {

  }

  ngOnInit(): void {
    this.notes = this.notesManagerService.notes;
  }

  onlyDone() {
    return this.notes.filter(note => note.done);
  }
}
