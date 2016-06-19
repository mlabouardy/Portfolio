
var NavbarCtrl = function(){

};

var NavbarComponent = {
  templateUrl : 'app/components/navbar/navbar.html',
  controller: NavbarCtrl
};

angular.module('portfolio.components')
  .component('navbar', NavbarComponent);
