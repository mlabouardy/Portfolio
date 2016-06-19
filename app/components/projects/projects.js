
var ProjectsCtrl = function(){

};

var ProjectsComponent = {
  templateUrl : 'app/components/projects/projects.html',
  controller: ProjectsCtrl
};

angular.module('portfolio.components')
  .component('projects', ProjectsComponent);
