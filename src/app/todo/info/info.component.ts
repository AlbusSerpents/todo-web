import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoDetails } from '../todo.interfaces';

import { faCheckCircle, faCircle, faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  private displayNameSize = 22;

  private readonly emptyIcon = faCircle;
  private readonly fullIcon = faCheckCircle;
  private readonly shrunkIconClass = "shrunk-icon";
  private readonly expandedIconClass = "expanded-icon";

  private readonly shrunkDescriptionClasses = "shrunk-description";
  private readonly expandedDescriptionClasses = "expanded-description";

  detailsIcon = faChevronLeft;
  detailsIconClass = this.shrunkIconClass;
  descriptionDisplayClass = this.shrunkDescriptionClasses;

  @Input()
  index: number;

  @Input()
  info: TodoDetails;

  @Output()
  focuced = new EventEmitter<number>();

  @Output()
  doneChanged = new EventEmitter<string>();

  @Output()
  dataUpdated = new EventEmitter<number>();

  private isExpanded = false;

  constructor() { }

  iconValue(): IconDefinition {
    return this.info.isDone ? this.fullIcon : this.emptyIcon;
  }

  nameValue(): string {
    const name = this.info.name;
    const fits = name.length <= this.displayNameSize;
    return fits ? name : `${name.substring(0, this.displayNameSize)}...`;
  }

  updateExpand() {
    this.focuced.emit(this.index);
    this.isExpanded = !this.isExpanded;
    this.detailsIconClass = this.isExpanded ? this.expandedIconClass : this.shrunkIconClass;
    this.descriptionDisplayClass = this.isExpanded ? this.expandedDescriptionClasses : this.shrunkDescriptionClasses;
  }

  showDescription(): boolean {
    return this.isExpanded;
  }
}
