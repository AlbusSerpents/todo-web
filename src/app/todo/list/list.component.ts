import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todos = [{
    id: "1234",
    name: "name 1",
    isDone: false,
    description: "Description"
  }, {
    id: "5678",
    name: "name 2",
    isDone: true,
    description: "Description 2,Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2"
  }, {
    id: "0987",
    name: "name 3",
    isDone: false,
    description: "Description 3"
  },
  ];

  constructor() { }

  ngOnInit(): void { }
}
