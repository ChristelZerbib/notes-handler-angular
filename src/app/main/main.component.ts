import {Component, OnInit} from '@angular/core';

export type Note = {
  id: number,
  title: string,
  description: string,
  done: boolean,
  createdAt: Date
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  notes: Note[] = [
    {id: 1, title: 'Cinéma', description: "Aller voir le film Jeudi...", done: true, createdAt: new Date()},
    {id: 2, title: 'Maman', description: "Appeler maman...", done: false, createdAt: new Date()}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onlyDone(): Note[] {
     let filtered = this.notes.filter(note => note.done);
     return filtered;
  }
}
