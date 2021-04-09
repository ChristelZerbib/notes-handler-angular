import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export function generateId(): number {
  function getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return getRandomInt(100000, 99999);
}

const BASE_URL = 'http://localhost:3000';
export type Note = {
  id: number,
  title: string,
  description: string,
  done: boolean,
  createdAt?: Date
};
export const EMPTY_NOTE: Note = {
  id: null,
  title: '',
  description: '',
  done: false,
  createdAt: new Date()
};

@Injectable({
  providedIn: 'root'
})
export class NotesManagerService {
  selectedNote: Note = EMPTY_NOTE;
  notes: Note[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadDataFromDb();
  }

  private loadDataFromDb(): void {
    this.httpClient.get(`${BASE_URL}/notes`).subscribe((notesOfDb) => {
      this.notes.length = 0;
      this.notes.push(...(notesOfDb as Note[]));
    });
  }

  reset(): void {
    this.selectedNote = EMPTY_NOTE;
  }

  select(id: number): void {
    this.selectedNote = {...this.notes.find(note => note.id === id)};
  }

  // crud
  createOrUpdate(form): void {
    if (!form.value) {
      return;
    }
    if (form.value.id === null) {
      this.creatFrom(form);
    } else {
      this.updateFrom(form);
    }
  }

  private updateFrom(form): void {
    const updateNote = {...form.value};
    this.httpClient.put(`${BASE_URL}/notes/${updateNote.id}`, updateNote).subscribe(() => {
      console.log('update note ' + updateNote.id);
      this.loadDataFromDb();
      this.reset();
    });
  }

  private creatFrom(form): void {
    const newNote = {...form.value};
    this.httpClient.post(`${BASE_URL}/notes`, newNote).subscribe(() => {
      console.log('note created ...');
      this.loadDataFromDb();
      this.reset();
    });
  }

  delete(id: number): void {
    this.httpClient.delete(`${BASE_URL}/notes/${id}`).subscribe(() => {
      console.log('note deleted ' + id);
      this.loadDataFromDb();
      this.reset();
    });
  }
}


