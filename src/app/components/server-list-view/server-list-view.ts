import {Component, Input} from '@angular/core';

@Component({
  selector: 'server-list-view',
  templateUrl: './server-list-view.html'
})
export class ServerListView {
  @Input() model: any[];

  constructor() {
    this.model = [];
  }
}
