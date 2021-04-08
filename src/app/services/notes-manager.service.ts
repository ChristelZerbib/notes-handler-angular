import {Injectable} from '@angular/core';

export function generateId() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return getRandomInt(100000, 99999);
}

export type Note = {
  id: number,
  title: string,
  description: string,
  done: boolean,
  createdAt: Date
}
export const EMPTY_NOTE: Note = {
  id: null,
  title: "",
  description: "",
  done: false,
  createdAt: new Date()
}

@Injectable({
  providedIn: 'root'
})
export class NotesManagerService {
  selectedNote: Note = EMPTY_NOTE;
  notes: Note[] = [
    {id: 1, title: 'Cinéma', description: "Aller voir le film Jeudi...", done: true, createdAt: new Date()},
    {id: 2, title: 'Maman', description: "Appeler maman...", done: true, createdAt: new Date()},
    {id: 3, title: 'Sport', description: "Aller à la salle de sport...", done: false, createdAt: new Date()},
    {id: 4, title: 'Lecture', description: "lire le livre de Js...", done: true, createdAt: new Date()}
  ];

  constructor() {
  }
  reset() {
    this.selectedNote = EMPTY_NOTE;
  }

  select(id: number) {
    this.selectedNote = {...this.notes.find(note => note.id === id)};
  }

 // crud
  createOrUpdate(input) {
    if (!input.value)
      return;

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
  delete(id: number) {
    const idx = this.notes.findIndex(note => note.id === id);
    this.notes.splice(idx, 1);
  }
}


