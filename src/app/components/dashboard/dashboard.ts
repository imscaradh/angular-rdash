import {Component} from '@angular/core';
import {ServerListService} from '../../services/server_list';
import {UserListService} from '../../services/user_list';
import {RdWidget} from "../rd-widget/rd-widget";
import {RdWidgetBody} from "../rd-widget-body/rd-widget-body";
import {Alerts} from "../alerts/alerts";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  providers: [ServerListService],
  viewProviders: [RdWidget, RdWidgetBody, Alerts]
})
export class Dashboard {
  servers: any[];
  users: any[];

  constructor(private serverListService: ServerListService,
              private userListService: UserListService) {
    this.serverListService = serverListService;
    this.userListService = userListService;
  }

  ngOnInit() {
    this.servers = this.serverListService.all();
    this.users = this.userListService.all();
  }
}
