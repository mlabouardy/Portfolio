
var ContactCtrl = function($window){

  var self = this;

  self.message = {};

  self.send = function(){
    var mail = 'mailto:mohamed@labouardy.com?subject=' + self.message.name +
               '&body=' + self.message.content;
    $window.open(mail);
  };

};

var ContactComponent = {
  templateUrl : 'app/components/contact/contact.html',
  controller: ContactCtrl
};

angular.module('portfolio.components')
  .component('contact', ContactComponent);
