import {Component, OnInit} from '@angular/core';
import {Note, NotesManagerService} from '../services/notes-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesManagerService: NotesManagerService) {
  }

  ngOnInit(): void {
    this.notes = this.notesManagerService.notes;
  }

  onlyDone(): Note[] {
    return this.notes.filter(note => note.done);
  }

  deleteNote(id: number): void {
    this.notesManagerService.delete(id);
  }

  selectNote(id: number): void {
    this.notesManagerService.select(id);
  }

  reset() {
    this.notesManagerService.reset();
  }
}
