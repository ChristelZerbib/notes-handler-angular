import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

export type Note = {
  id: number,
  title: string,
  description: string,
  done: boolean,
  createdAt: Date
}
const EMPTY_NOTE: Note = {
  id: null,
  title: "",
  description: "",
  done: false,
  createdAt: new Date()
}

function generateId() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return getRandomInt(100000, 99999);
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  notes: Note[] = [
    {id: 1, title: 'Cinéma', description: "Aller voir le film Jeudi...", done: true, createdAt: new Date()},
    {id: 2, title: 'Maman', description: "Appeler maman...", done: true, createdAt: new Date()},
    {id: 3, title: 'Sport', description: "Aller à la salle de sport...", done: false, createdAt: new Date()},
    {id: 4, title: 'Lecture', description: "lire le livre de Js...", done: true, createdAt: new Date()}
  ];
  selectedNote: Note = EMPTY_NOTE

  constructor() {
  }

  ngOnInit(): void {
  }

  onlyDone(): Note[] {
    let filtered = this.notes.filter(note => note.done);
    return filtered;
  }

  deleteNote(id: number): void {
    const idx = this.notes.findIndex(note => note.id === id);
    this.notes.splice(idx, 1);
  }

  toggleDone(id: number): void {
    const found = this.notes.find(note => note.id === id);
    found.done = !found.done;
  }

  selectNote(id: number): void {
    this.selectedNote = {...this.notes.find(note => note.id === id)};
  }

  reset() {
    this.selectedNote = EMPTY_NOTE;
  }

  createOrUpdateNote(input: NgForm): void {
    if (input.value.id === null) {
      let newNote = {...input.value};
      newNote.createdAt = new Date();
      newNote.id = generateId();
      this.notes.push(newNote);
    } else {
      const found = this.notes.find(note => note.id === input.value.id);
         found.title = input.value.title;
         found.description = input.value.description;
         found.done = input.value.done;
    }
  }
}
