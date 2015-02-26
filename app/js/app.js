(function(){

'use strict';
var skm = angular.module('skm', [
  'ngRoute',
  'skm.filters',
  'skm.services',
  'skm.directives',
  'skm.controllers'
]);

skm.controller = angular.module('skm.controllers',[]).controller;
skm.services = angular.module('skm.services',[]);
skm.directive = angular.module('skm.directives',[]).directive;
skm.filter = angular.module('skm.filters',[]).filter;

window.skm = skm;
})();