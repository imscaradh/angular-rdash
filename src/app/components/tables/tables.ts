import {Component} from '@angular/core';
import {ServerListService} from '../../services/server_list';
import {RdWidget} from "../rd-widget/rd-widget";
import {RdWidgetHeader} from "../rd-widget-header/rd-widget-header";
import {RdWidgetBody} from "../rd-widget-body/rd-widget-body";
import {RdWidgetFooter} from "../rd-widget-footer/rd-widget-footer";
import {RdLoading} from "../rd-loading/rd-loading";
import {ServerListView} from "../server-list-view/server-list-view";
import {UserListService} from "../../services/user_list";


@Component({
  selector: 'tables',
  providers: [ServerListService, UserListService],
  templateUrl: './tables.html',
  viewProviders: [RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView]
})
export class Tables {
  servers: any[];

  constructor(private serverListService: ServerListService,
              private userListService: UserListService) {
  }

  ngOnInit() {
    this.servers = this.serverListService.all();
  }
}
