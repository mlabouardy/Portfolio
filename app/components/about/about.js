
var AboutCtrl = function(){

  var self = this;

  self.contacts = [
    {
      'name' : 'github.png',
      'href' : 'http://www.github.com/mlabouardy'
    },
    {
      'name' : 'linkedin.png',
      'href' : 'https://www.linkedin.com/in/mohamed-labouardy-31435986'
    },
    {
      'name' : 'twitter.png',
      'href' : 'http://www.twitter.com/mlabouardy'
    },
    {
      'name' : 'facebook.png',
      'href' : 'http://www.facebook.com/mlabouardy'
    }
  ];
};

var AboutComponent = {
  templateUrl : 'app/components/about/about.html',
  controller: AboutCtrl
};

angular.module('portfolio.components')
  .component('about', AboutComponent);
