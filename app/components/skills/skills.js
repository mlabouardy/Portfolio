
var SkillsCtrl = function($http){
  var drawPieChart = function(name, data){
    var context = document.getElementById(name).getContext('2d');
    var chart = new Chart(context,{
      type: 'doughnut',
      data: data,
      animation:{
        animateScale:true
      }
    });
  };

  $http.get('data/skills/mobile.json').then(function(response){
    drawPieChart('mobile', response.data);
  });

  $http.get('data/skills/web.json').then(function(response){
    drawPieChart('web', response.data);
  });

  $http.get('data/skills/devops.json').then(function(response){
    drawPieChart('devops', response.data);
  });

  $http.get('data/skills/databases.json').then(function(response){
    drawPieChart('databases', response.data);
  });

  $http.get('data/skills/programming.json').then(function(response){
    drawPieChart('programming', response.data);
  });

  $http.get('data/skills/languages.json').then(function(response){
    drawPieChart('languages', response.data);
  });

  $http.get('data/skills/testing.json').then(function(response){
    drawPieChart('testing', response.data);
  });
};

var SkillsComponent = {
  templateUrl : 'app/components/skills/skills.html',
  controller: SkillsCtrl
};

angular.module('portfolio.components')
  .component('skills', SkillsComponent);
