import {Component, Input} from '@angular/core';

@Component({
  selector: 'user-list-view',
  templateUrl: './user-list-view.html',
})
export class UserListView {
  @Input() model: any[];

  constructor() {
    this.model = [];
  }
}
