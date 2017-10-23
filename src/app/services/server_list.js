System.register(['@angular/core'], function (exports_1, context_1) {
  'use strict'
  var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc)
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
  var __moduleName = context_1 && context_1.id
  var core_1, ServerListService
  return {
    setters: [
      function (core_1_1) {
        core_1 = core_1_1
      }
    ],
    execute: function () {
      ServerListService = (function () {
        function ServerListService () {
          this.servers = [{
            name: 'RDVMPC001',
            ip: '238.103.133.37',
            'tooltip': '',
            'tooltipcls': 'text-success',
            'icon': 'fa-check'
          },
            {name: 'RDVMPC002', ip: '68.66.63.170', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {name: 'RDVMPC003', ip: '76.117.212.33', 'tooltip': '', 'tooltipcls': 'text-danger', 'icon': 'fa-warning'},
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {
              name: 'RDESX003',
              ip: '209.25.191.61',
              'tooltip': 'Could not connect!',
              'tooltipcls': 'text-warning',
              'icon': 'fa-flash'
            },
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
            {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'}
          ]
        }

        ServerListService.prototype.add = function (value) {
          this.servers.push(value)
        }
        ServerListService.prototype.all = function () {
          return this.servers
        }
        ServerListService = __decorate([
          core_1.Injectable()
        ], ServerListService)
        return ServerListService
      }())
      exports_1('ServerListService', ServerListService)
    }
  }
})
//# sourceMappingURL=server_list.js.map
