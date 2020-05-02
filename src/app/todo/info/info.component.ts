import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoDetails } from '../todo.interfaces';

import { faCheckCircle, faCircle, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  private displayNameSize = 22;

  private emptyIcon = faCircle;
  private fullIcon = faCheckCircle;

  detailsIcon = faChevronDown;

  @Input()
  info: TodoDetails;

  @Output()
  doneChanged = new EventEmitter<string>();

  constructor() { }

  iconValue(): IconDefinition {
    return this.info.isDone ? this.fullIcon : this.emptyIcon;
  }

  nameValue(): string {
    const name = this.info.name;
    const fits = name.length <= this.displayNameSize;
    return fits ? name : `${name.substring(0, this.displayNameSize)}...`;
  }
}
