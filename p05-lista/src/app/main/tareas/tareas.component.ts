import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea() {
    this.aTareas.push(this.sTarea);
    this.sTarea = '';
  }
}
