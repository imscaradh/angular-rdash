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
  var core_1, UserListService
  return {
    setters: [
      function (core_1_1) {
        core_1 = core_1_1
      }
    ],
    execute: function () {
      UserListService = (function () {
        function UserListService () {
          this.users = [{
            id: 1,
            name: 'Joe Bloggs',
            role: 'Super Admin',
            account: 'AZ23045'
          }, {
            id: 2,
            name: 'Timothy Hernandez',
            role: 'Admin',
            account: 'AU24783'
          }, {
            id: 3,
            name: 'Joe Bickham',
            role: 'User',
            account: 'AM23781'
          }]
        }

        UserListService.prototype.add = function (value) {
          this.users.push(value)
        }
        UserListService.prototype.all = function () {
          return this.users
        }
        UserListService = __decorate([
          core_1.Injectable()
        ], UserListService)
        return UserListService
      }())
      exports_1('UserListService', UserListService)
    }
  }
})
//# sourceMappingURL=user_list.js.map
