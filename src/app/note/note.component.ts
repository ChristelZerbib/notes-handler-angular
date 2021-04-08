import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
